/*!
 * assemble-render-file <https://github.com/jonschlinkert/assemble-render-file>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var utils = require('./utils');

/**
 * Render a vinyl file.
 *
 * ```js
 * app.src('*.hbs')
 *   .pipe(app.renderFile());
 * ```
 *
 * @name .renderFile
 * @param  {Object} `locals` Optional locals to pass to the template engine for rendering.
 * @return {Object}
 * @api public
 */

module.exports = function(config) {
  return function plugin(app) {
    if (!utils.isValid(app, 'assemble-render-file', ['app', 'collection'])) return;
    var opts = utils.merge({}, app.options, config);
    var debug = utils.debug;

    app.define('renderFile', function(engine, locals) {
      if (typeof engine !== 'string') {
        locals = engine;
        engine = null;
      }

      debug('renderFile: engine "%s"', engine);

      locals = locals || {};
      var collection = {};

      if (locals && !locals.isCollection) {
        opts = utils.merge({}, opts, locals);
      } else {
        collection = locals;
        locals = {};
      }

      var View = opts.View || opts.File || collection.View || this.View;
      var files = [];
      var handled = [];

      return utils.through.obj(function(file, enc, next) {
        if (file.isNull()) {
          next(null, file);
          return;
        }

        if (file.data.render === false || opts.render === false) {
          next(null, file);
          return;
        }

        if (!file.isView) file = new View(file);
        files.push(file);

        // run `onLoad` middleware
        app.handleOnce('onLoad', file, function(err, view) {
          if (err) return next(err);
          handled.push(view);

          debug('renderFile, preRender: %s', view.relative);

          resolveEngine(app, locals, engine);
          if (!locals.engine && app.isFalse('engineStrict')) {
            next(null, view);
            return;
          }

          // render the view
          app.render(view, locals, function(err, res) {
            if (typeof res === 'undefined' || err) {
              handleError(app, err, view, files, handled, next);
              return;
            }

            debug('renderFile, postRender: %s', view.relative);
            next(null, res);
          });
        });
      });
    });

    return plugin;
  };
};

function handleError(app, err, view, files, handled, cb) {
  var last = files[files.length - 1];
  if (!(err instanceof Error)) {
    err = new Error('view cannot be rendered: ' + last.path);
  }
  err.files = files;
  err.handled = handled;
  err.view = last;
  err.path = last.path;
  app.emit('error', err);
  cb(err);
}

function resolveEngine(app, locals, engine) {
  if (typeof engine === 'string') {
    locals.engine = engine;
    return;
  }
  if (locals.engine) {
    return;
  }
  // allow a `noop` engine to be defined
  if (app.engines['.noop']) {
    locals.engine = '.noop';
  }
}
