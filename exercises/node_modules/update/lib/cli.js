'use strict';

process.ORIGINAL_CWD = process.cwd();

var os = require('os');
var path = require('path');
var find = require('find-pkg');
var log = require('log-utils');
var utils = require('./utils');
var argv = utils.parseArgs(process.argv.slice(2));

module.exports = function(Update, config, cb) {
  if (typeof cb !== 'function') {
    throw new TypeError('expected a callback function');
  }
  if (!config || typeof config !== 'object') {
    throw new TypeError('expected config to be an object');
  }

  var opts = utils.extend({}, config, argv);

  function logger() {
    if (opts.silent) return;
    console.log.apply(console, arguments);
  }

  /**
   * Resolve `package.json` filepath and use it for `cwd`
   */

  var pkgPath = find.sync(process.cwd());
  var cwd = pkgPath ? path.dirname(pkgPath) : process.cwd();

  /**
   * Set `cwd`
   */

  if (cwd !== process.cwd()) {
    logger(log.timestamp, 'using cwd', log.yellow('~' + cwd));
    process.chdir(cwd);
  }

  /**
   * Get the Base ctor and instance to use
   */

  var base = resolveBase();
  if (!(base instanceof Update)) {
    base = new Update(opts);
  }

  /**
   * Require the config file (instance or function)
   */

  base.set('cache.argv', opts);

  /**
   * Check for user `~/update/updatefile.js`
   */

  var homeUpdatefile = path.resolve(os.homedir(), 'update/updatefile.js');

  /**
   * Check for config file
   */

  var defaults = path.resolve(__dirname, 'updatefile.js');
  var updatefile = path.resolve(cwd, 'updatefile.js');
  var fn = require(defaults);

  /**
   * Invoke `app`
   */

  if (utils.exists(updatefile)) {
    logger(log.timestamp, 'using file', log.green('~' + updatefile));
    var val = require(updatefile);
    if (typeof val === 'function') {
      function updater() {
        if (!utils.isValid(this, 'default-updater')) return;
        this.use(fn);
        this.use(val);
      }
      base.register('default', updater);
    } else if (val && val.isApp) {
      base = val;
    }
    base.updatefile = true;
  } else {
    logger(log.timestamp, 'using file', log.green('~' + defaults));
    base.register('default', fn);
  }

  /**
   * Register updater in user home
   */

  if (utils.exists(homeUpdatefile)) {
    base.register('home', require(homeUpdatefile));
  }

  /**
   * Handle errors
   */

  if (!base) {
    handleError(base, new Error('cannot run config file: ' + updatefile));
  }
  if (typeof base !== 'function' && Object.keys(base).length === 0) {
    handleError(base, new Error('expected a function or instance of Base to be exported'));
  }

  /**
   * Merge `argv` onto options
   */

  base.option(argv);

  /**
   * Setup listeners
   */

  base.on('error', function(err) {
    logger(err.stack);
  });

  base.on('build', function(event, build) {
    if (!build || build.isSilent) return;
    var prefix = event === 'finished' ? log.success + ' ' : '';
    logger(log.timestamp, event, build.key, prefix + log.red(build.time));
  });

  base.on('task', function(event, task) {
    if (!task || task.isSilent) return;
    logger(log.timestamp, event, task.key, log.red(task.time));
  });

  /**
   * Resolve the "app" to use
   */

  function resolveBase() {
    var file = {path: path.resolve(cwd, 'node_modules/update'), name: 'update'};
    if (utils.exists(file.path)) {
      var Update = require(file.path);
      var update = new Update(opts);

      if (typeof update._name === 'undefined') {
        update.is('update');
      }

      Update.plugins(update);
      return update;
    }
  }

  function handleError(app, err) {
    if (app && app.hasListeners && app.hasListeners('error')) {
      app.emit('error', err);
    } else {
      console.error(err.stack);
      process.exit(1);
    }
  }

  cb(null, base);
};
