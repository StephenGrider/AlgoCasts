/*!
 * assemble-fs <https://github.com/jonschlinkert/assemble-fs>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var utils = require('./utils');

/**
 * Plugin is registered on `app` and `collection` instances
 */

module.exports = function() {
  return function() {
    if (!this.isApp) return;
    plugin.call(this, this);

    return function() {
      if (!this.isCollection) return;
      plugin.call(this, this);
    };
  };
};

/**
 * The actual `fs` plugin
 */

function plugin(app) {
  if (!utils.isValidApp(app, 'assemble-fs', ['app', 'views', 'collection'])) return;

  /**
   * Setup middleware handlers. Assume none of the handlers exist if `onStream`
   * does not exist.
   */

  if (typeof app.handler === 'function' && typeof app.onStream !== 'function') {
    app.handler('onStream');
    app.handler('preWrite');
    app.handler('postWrite');
    app.handler('onLoad');
  }

  /**
   * Copy files with the given glob `patterns` to the specified `dest`.
   *
   * ```js
   * app.task('assets', function(cb) {
   *   app.copy('assets/**', 'dist/')
   *     .on('error', cb)
   *     .on('finish', cb)
   * });
   * ```
   * @name .copy
   * @param {String|Array} `patterns` Glob patterns of files to copy.
   * @param  {String|Function} `dest` Desination directory.
   * @return {Stream} Stream, to continue processing if necessary.
   * @api public
   */

  app.mixin('copy', function(patterns, dest, options) {
    var opts = utils.extend({ allowEmpty: true }, options);
    return utils.vfs.src(patterns, opts)
      .pipe(utils.vfs.dest(dest, opts))
  });

  /**
   * Glob patterns or filepaths to source files.
   *
   * ```js
   * app.src('src/*.hbs', {layout: 'default'});
   * ```
   * @name .src
   * @param {String|Array} `glob` Glob patterns or file paths to source files.
   * @param {Object} `options` Options or locals to merge into the context and/or pass to `src` plugins
   * @api public
   */

  app.mixin('src', function(glob, options) {
    var opts = utils.extend({ allowEmpty: true }, options);
    return utils.vfs.src(glob, opts)
      .pipe(toCollection(this, opts))
      .pipe(utils.handle(this, 'onLoad'))
      .pipe(utils.handle(this, 'onStream'))
  });

  /**
   * Glob patterns or paths for symlinks.
   *
   * ```js
   * app.symlink('src/**');
   * ```
   * @name .symlink
   * @param {String|Array} `glob`
   * @api public
   */

  app.mixin('symlink', function() {
    return utils.vfs.symlink.apply(utils.vfs, arguments);
  });

  /**
   * Specify a destination for processed files.
   *
   * ```js
   * app.dest('dist/');
   * ```
   * @name .dest
   * @param {String|Function} `dest` File path or rename function.
   * @param {Object} `options` Options and locals to pass to `dest` plugins
   * @api public
   */

  app.mixin('dest', function(dir) {
    if (!dir) {
      throw new TypeError('expected dest to be a string or function.');
    }

    var output = utils.combine([
      utils.handle(this, 'preWrite'),
      utils.vfs.dest.apply(utils.vfs, arguments),
      utils.handle(this, 'postWrite')
    ]);

    output.on('end', function() {
      output.emit('finish');
      app.emit('end');
    });

    return output;
  });
}

/**
 * Push vinyl files into a collection or list.
 */

function toCollection(app, options) {
  var opts = utils.extend({collection: 'streamFiles'}, options);
  var name = opts.collection;
  var collection, view;

  if (app.isApp) {
    collection = app[name] || app.create(name, options);
  }

  var stream = utils.through.obj(function(file, enc, next) {
    if (file.isNull()) {
      next(null, file);
      return;
    }

    // disable default `onLoad` handling inside templates
    file.options = utils.extend({ onLoad: false }, file.options);

    if (app.isApp) {
      view = collection.addView(file.path, file);
    } else if (app.isCollection || app.isViews) {
      view = app.addView(file.path, file);
    } else if (app.isList) {
      view = app.setItem(file.path, file);
    } else {
      return next(new Error('assemble-fs expects an instance, collection or view'));
    }

    view.options = utils.extend({}, options, view.options);
    next(null, view);
  });

  app.stream = stream;
  return stream;
}
