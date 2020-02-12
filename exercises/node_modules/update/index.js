/*!
 * update <https://github.com/jonschlinkert/update>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var os = require('os');
var path = require('path');
var Base = require('assemble-core');
var utils = require('./lib/utils');
var cli = require('./lib/cli');

/**
 * Create a update application with `options`.
 *
 * ```js
 * var update = require('update');
 * var app = update();
 * ```
 * @param {Object} `options` Settings to initialize with.
 * @api public
 */

function Update(options) {
  if (!(this instanceof Update)) {
    return new Update(options);
  }
  Base.call(this, options);
  this.is('update');
  this.initUpdate(this);
  this.initDefaults();
}

/**
 * Inherit `Base`
 */

Base.extend(Update);

/**
 * Initialize defaults, emit events before and after
 */

Update.prototype.initUpdate = function() {
  Update.emit('update.preInit', this);
  Update.plugins(this);
  Update.emit('update.postInit', this);
};

/**
 * Initialize `Update` defaults
 */

Update.prototype.initDefaults = function() {
  this.define('generators', this.generators);
  this.define('updater', this.generator);
  this.updaters = this.generators;
  var self = this;

  this.define('home', function() {
    var args = [].slice.call(arguments);
    var home = path.resolve(self.options.homedir || os.homedir());
    return path.resolve.apply(path, [home].concat(args));
  });

  this.option('help', {configname: 'updater', appname: 'update'});
  this.define('update', this.generate);
  this.define('getUpdater', function() {
    return this.getGenerator.apply(this, arguments);
  });

  this.option('toAlias', function(name) {
    return name.replace(/^updater?-(.*)$/, '$1');
  });

  function isUpdater(name) {
    return /^(updater|generate)?-/.test(name);
  }

  // create `app.globals` store
  Object.defineProperty(this, 'globals', {
    configurable: true,
    get: function() {
      return new utils.Store('generate-globals', {
        cwd: utils.resolveDir('~/')
      });
    }
  });

  Object.defineProperty(this, 'common', {
    configurable: true,
    get: function() {
      return utils.common;
    }
  });

  this.onLoad(/(^|[\\\/])templates[\\\/]/, function(view, next) {
    var userDefined = self.home('templates', view.basename);
    if (utils.exists(userDefined)) {
      view.contents = fs.readFileSync(userDefined);
      view.homePath = userDefined;
      view.isUserDefined = true;
    }
    if (/^templates[\\\/]/.test(view.relative)) {
      view.path = path.join(self.cwd, view.basename);
    }
    utils.stripPrefixes(view);
    utils.parser.parse(view, next);
  });

  this.option('lookup', function(name) {
    var patterns = [];
    if (!isUpdater(name)) {
      patterns.push(`updater-${name}`);
    }
    return patterns;
  });

  this.on('unresolved', function(search, app) {
    if (!isUpdater(search.name)) return;
    var resolved = utils.resolve.file(search.name) || utils.resolve.file(search.name, {cwd: utils.gm});
    if (resolved) {
      search.app = app.generator(search.name, require(resolved.path));
    }
  });

  this.on('option', function(key, val) {
    if (key === 'dest') {
      self.base.cwd = val;
      self.cwd = val;
    }
  });

  this.on('ask', function(val, key, question, answers) {
    val = val || question.default;
    if (typeof val === 'undefined') {
      question.default = self.common.get(key);
    }
  });

  this.on('task:starting', function(event, task) {
    if (event && event.app) {
      event.app.cwd = self.base.options.dest || self.base.cwd || event.app.cwd;
    }
    if (task && task.app) {
      task.app.cwd = self.base.options.dest || self.base.cwd || task.app.cwd;
    }
  });
};

/**
 * Expose plugins on the constructor to allow other `base`
 * apps to use the plugins before instantiating.
 */

Update.prototype.configfile = function(cwd) {
  return utils.configfile(cwd);
};

/**
 * Get the list of updaters to run
 */

Update.prototype.getUpdaters = function(names, options) {
  if (utils.isObject(names)) {
    options = names;
    names = [];
  }
  options = options || {};
  var updaters = this.option('updaters');
  this.addUpdaters(names, options);
  if (utils.isEmpty(updaters)) {
    updaters = this.pkg.get('update.updaters');
  }
  if (utils.isEmpty(updaters)) {
    updaters = this.globals.get('updaters');
  }
  if (options.remove) {
    updaters = utils.remove(updaters, utils.toArray(options.remove));
  }
  if (options.add) {
    updaters = utils.union([], updaters, utils.toArray(options.add));
  }
  return updaters;
};

/**
 * Get the list of updaters to run
 */

Update.prototype.addUpdaters = function(names, options) {
  options = options || {};
  if (typeof names === 'string') {
    names = utils.toArray(names);
  }
  if (options.config) {
    this.pkg.union('update.updaters', names);
  }
  if (options.global) {
    this.globals.union('updaters', names);
  }
};

/**
 * Expose plugins on the constructor to allow other `base`
 * apps to use the plugins before instantiating.
 */

Update.plugins = function(app) {
  app.use(utils.logger());
  app.use(utils.generators());
  app.use(utils.store('update'));
  app.use(utils.runtimes());
  app.use(utils.questions());
  app.use(utils.loader());
  app.use(utils.config());
  app.use(utils.cli());
};

/**
 * Get the updaters or tasks to run from user config
 */

Update.resolveTasks = function(app, argv) {
  var tasks = utils.arrayify(argv._);
  if (tasks.length && utils.contains(['help', 'list', 'new', 'default'], tasks)) {
    app.enable('silent');
    return tasks;
  }

  if (tasks.length && !utils.contains(['help', 'list', 'new', 'default'], tasks)) {
    return tasks;
  }

  tasks = app.getUpdaters(argv.add, argv);
  if (!tasks || !tasks.length) {
    return ['init'];
  }
  return tasks;
};

/**
 * Expose static `cli` method
 */

Update.cli = cli;

/**
 * Expose `update`
 */

module.exports = Update;
