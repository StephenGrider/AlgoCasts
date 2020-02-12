#!/usr/bin/env node

process.on('exit', function() {
  require('set-blocking')(true);
});

var os = require('os');
var Update = require('..');
var commands = require('../lib/commands');
var utils = require('../lib/utils');
var argv = utils.parseArgs(process.argv.slice(2));

/**
 * Listen for errors
 */

Update.on('update.preInit', function(app) {
  app.on('error', function(err) {
    console.log(err.stack);
    process.exit(1);
  });
});

Update.on('update.postInit', function(app) {
  commands(app);
});

/**
 * Init CLI
 */

Update.cli(Update, argv, function(err, app) {
  if (err) return console.log(err);

  app.cli.process(argv, function(err) {
    if (err) app.emit('error', err);

    var tasks = argv._.length ? argv._ : ['default'];
    if (app.updatefile !== true || argv.run) {
      tasks = Update.resolveTasks(app, argv);

    } else if (app.updatefile === true && app.pkg.get('update.run')) {
      tasks = Update.resolveTasks(app, argv).concat(tasks);
    }

    app.once('task', function() {
      if (!app.base.enabled('silent')) {
        app.log.success('running:', logRunning(app, tasks.join(', ')));
      }
    });

    app.update(tasks, function(err) {
      if (err) return console.log(err);
      app.emit('done');
      process.exit();
    });
  });
});

function logRunning(app, str) {
  if (os.platform() === 'win32') {
    return app.log.bold(app.log.cyan(str));
  }
  return app.log.bold(app.log.blue(str));
}
