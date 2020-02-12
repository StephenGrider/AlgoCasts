'use strict';

var fs = require('fs');
var path = require('path');
var utils = require('./utils');

function loader(patterns, config) {
  if (utils.isObject(patterns)) {
    config = patterns;
    patterns = undefined;
  }

  return function plugin(app) {
    if (utils.isRegistered(app, 'assemble-loader')) {
      return plugin;
    }

    if (utils.isValidInstance(app)) {
      appLoader(this, config);
    }

    if (utils.isValidInstance(app, ['views', 'items', 'collection'])) {
      collectionLoader(this, config);
    }

    if (utils.isValidGlob(patterns)) {
      return viewLoader(app, config, patterns);
    }

    return plugin;
  };
}

/**
 * If a glob pattern is passed on the outer function, this means the
 * user wants to load views onto the collection. Example:
 *
 * ```js
 * app.create('pages')
 *   .use(loader('*.hbs'))
 * ```
 *
 * So we pass the pattern to the `loadViews` function that we create
 * for the collection in the `collectionLoader` function below.
 */

function viewLoader(app, config, patterns) {
  app.loadViews(patterns, createOptions(app, config, {}));
  return app;
}

/**
 * Load views that don't belong to a collection
 *
 * @param {Object} `app` top level application instance (e.g. instance of assemble)
 * @param {Object} `config` Settings passed to the plugin
 * @return {Object}
 */

function appLoader(app, config) {
  var viewFn = app.view;

  app.define('load', function(patterns, options) {
    var opts = createOptions(app, config, options);
    var cache = {};
    var load = utils.loader(cache, opts, viewFn.bind(this));
    load.apply(this, arguments);
    return cache;
  });
}

/**
 * Load views onto a collection.
 *
 * @param {Object} `collection` Collection instance (.e.g. `pages` or `partials`)
 * @param {Object} `config` Settings passed to the plugin
 * @return {Object}
 */

function collectionLoader(collection, config) {
  var addViews = collection.addViews;
  var addView = collection.addView;

  collection.define('addView', function(key, value) {
    if (utils.isFilepath(key, value)) {
      return this.loadView.apply(this, arguments);
    }
    return addView.apply(this, arguments);
  });

  collection.define('addViews', function(key, value) {
    if (utils.isGlob(key, value) || utils.isFilepath(key, value)) {
      return this.loadViews.apply(this, arguments);
    }
    return addViews.apply(this, arguments);
  });

  collection.define('load', function(patterns, options) {
    var opts = createOptions(this, config, options);
    var load = utils.loader(this.views, opts, addView.bind(this));
    load.apply(this, arguments);
    return this;
  });

  collection.define('loadView', function(filepath, options) {
    if (utils.hasGlob(filepath)) {
      return this.loadViews.apply(this, arguments);
    }

    var opts = createOptions(this, config, options);
    var absolute = path.resolve(opts.cwd, filepath);
    var buf = null;

    if (utils.exists(absolute)) {
      buf = fs.readFileSync(absolute);
    }
    return this.addView(absolute, {contents: buf});
  });

  collection.define('loadViews', function(patterns, options) {
    var opts = createOptions(this, config, options);
    var load = utils.loader({}, opts, this.addView.bind(this));
    load.apply(this, arguments);
    return this;
  });
}

/**
 * Create options from:
 *   + `config` - settings passed to plugin
 *   + `app.options` - general instance options
 *   + `options` - options specifically passed to the method being called
 */

function createOptions(app, config, options) {
  var cwd = app.cwd || process.cwd();
  return utils.extend({cwd: cwd}, config, app.options, options);
}

/**
 * Expose `loader`
 */

module.exports = loader;
