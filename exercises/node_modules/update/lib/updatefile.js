'use strict';

var path = require('path');
var isValid = require('is-valid-app');
var choose = require('gulp-choose-files');
var through = require('through2');
var utils = require('./utils');
var list = require('./list');
var Update = require('..');
var argv = require('yargs-parser')(process.argv.slice(2), utils.opts);

module.exports = function(app, base) {
  if (!isValid(app, 'update-builtins')) return;
  var gm = path.resolve.bind(path, require('global-modules'));
  var cwd = path.resolve.bind(path, app.cwd);

  /**
   * Select the updaters to run every time `update` is run. Use `--add` to
   * add additional updaters, and `--remove` to remove them. You can run this command
   * whenever you want to update your preferences, like after installing new updaters.
   *
   * ```sh
   * $ update init
   * ```
   * @name init
   * @api public
   */

  app.task('init', { silent: true }, function() {
    var list = Update.resolveTasks(app, argv);
    var updaters = [];

    console.log();
    console.log('  Current updaters:', app.log.cyan(list.join(', ')));
    console.log();

    return app.src([gm('updater-*'), cwd('node_modules/updater-*')])
      .pipe(through.obj(function(file, enc, next) {
        file.basename = app.toAlias(file.basename);
        next(null, file);
      }))
      .pipe(choose({message: 'Choose the updaters to run with the `update` command:'}))
      .pipe(through.obj(function(file, enc, next) {
        updaters.push(file.basename);
        next();
      }, function(next) {
        save(app, updaters);
        next();
      }));
  });

  /**
   * Display a list of currently installed updaters.
   *
   * ```sh
   * $ update defaults:list
   * # aliased as
   * $ update list
   * ```
   * @name list
   * @api public
   */

  app.task('list', { silent: true }, function() {
    return app.src([gm('updater-*'), cwd('node_modules/updater-*')])
      .pipe(through.obj(function(file, enc, next) {
        file.alias = app.toAlias(file.basename);
        next(null, file);
      }))
      .pipe(list(app));
  });

  /**
   * Display a help [menu](#help-menu) of available commands and flags.
   *
   * ```sh
   * $ update defaults:help
   * # aliased as
   * $ update help
   * ```
   * @name help
   * @api public
   */

  app.task('help', { silent: true }, function(cb) {
    base.cli.process({ help: true }, cb);
  });

  /**
   * Show the list of updaters that are registered to run on the current project.
   *
   * ```sh
   * $ update defaults:show
   * # aliased as
   * $ update show
   * ```
   * @name show
   * @api public
   */

  app.task('show', { silent: true }, function(cb) {
    argv._ = [];
    var list = Update.resolveTasks(app, argv);
    console.log();
    console.log('  queued updaters:', `\n    · ` + list.join('\n    · '));
    console.log();
    cb();
  });

  /**
   * Default task for the built-in `defaults` generator.
   *
   * ```sh
   * $ update help
   * ```
   * @name help
   * @api public
   */

  app.task('default', { silent: true }, ['help']);
};

/**
 * Save answers to `init` prompts
 */

function save(app, list) {
  if (!list.length) {
    console.log(' no updaters were saved.');
    return;
  }

  if (app.options.c || app.options.config) {
    app.pkg.set('update.updaters', list);
  } else {
    app.globals.set('updaters', list);
  }

  var suffix = list.length > 1 ? 'updaters are' : 'updater is';
  var gray = app.log.gray;
  var cyan = app.log.cyan;
  var bold = app.log.bold;
  var command = 'update';

  var msg = gray('\n  ---')
      + '\n'
      + `\n  ${app.log.green(app.log.check)}  Done, your default ${suffix}:`
      + '\n'
      + cyan(`\n    · ` + list.join('\n    · '))
      + '\n'
      + '\n'
      + gray('  ---')
      + '\n'
      + '\n'
      + bold('  Cheetsheet:')
      + '\n'
      + '\n'
      + (`  $ ${command} --init`) + gray('            initialize update (start over)\n')
      + (`  $ ${command} --remove <names>`) + gray('  remove updaters from your queue\n')
      + (`  $ ${command} --add <names>`) + gray('     add updaters to your queue\n')
      + (`  $ ${command} show`) + gray('              show your queued updaters\n')
      + (`  $ ${command} list`) + gray('              list all installed updaters\n')

  console.log(msg);
  console.log();
}

