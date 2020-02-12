/*!
 * load-templates <https://github.com/jonschlinkert/load-templates>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var utils = require('./utils');

module.exports = function(cache, config, loaderFn) {
  if (typeof cache === 'function') {
    loaderFn = cache;
    config = {};
    cache = undefined;
  }

  if (typeof config === 'function') {
    loaderFn = config;
    config = {};
  }

  cache = cache || {};

  function loadViews(key, val) {
    if (!key) return {};

    if (utils.isView(val)) {
      return addView(key, val);
    }

    if (utils.isObject(key) || !utils.isValidGlob(key)) {
      return addViews(key, val);
    }

    if (typeof key === 'string' && !val) {
      return loader(key);
    }

    loader(key, val);
    return cache;
  }

  function addView(name, view) {
    cache[name] = view;
    return cache;
  }

  function addViews(views) {
    if (Array.isArray(views)) {
      views.forEach(function(view) {
        loadViews(view);
      });
    } else {
      for (var name in views) {
        if (views.hasOwnProperty(name)) {
          addView(name, views[name]);
        }
      }
    }
    return cache;
  }

  function loader(patterns, options) {
    var opts = utils.extend({cwd: process.cwd()}, config, options);
    opts.cwd = path.resolve(opts.cwd);

    var files = utils.arrayify(patterns);
    var parent = '';

    if (utils.hasGlob(patterns)) {
      parent = utils.parent(files[0]);
      files = utils.glob.sync(patterns, opts);

      // if `opts.nonull` is defined and no files are found, return
      if (isPatterns(patterns, files)) {
        return cache;
      }
    }

    var len = files.length;
    var idx = -1;

    while (++idx < len) {
      var filepath = path.resolve(opts.cwd, files[idx]);
      var file = {path: filepath, cwd: opts.cwd};
      file.stat = utils.tryStat(file.path);
      file.base = path.resolve((parent && parent !== '.') ? parent : file.cwd);

      if (!file.stat) {
        continue;
      }

      if (file.stat.isDirectory && file.stat.isDirectory()) {
        continue;
      }

      utils.syncContents(file, file.contents || file.content);
      file.options = file.options || {};
      file.locals = file.locals || {};
      file.data = file.data || {};

      utils.define(file, 'contents', {
        configurable: true,
        enumerable: true,
        set: function(val) {
          utils.syncContents(file, val);
        },
        get: function() {
          return file._contents || (file._contents = fs.readFileSync(this.path));
        }
      });

      if (typeof loaderFn === 'function') {
        var res = loaderFn(file);
        if (typeof res !== 'undefined') {
          file = res;
        }
      }
      if (!file._isVinyl && !file.isView) {
        opts.file = file;
        file = utils.toFile(file.path, patterns, opts);
      }

      file.key = utils.renameKey(file, opts);
      addView(file.key, file);
    }
    return cache;
  }
  return loadViews;
};

function isPatterns(patterns, files) {
  patterns = utils.arrayify(patterns);
  files = utils.arrayify(files);

  if (files.length !== patterns.length) {
    return false;
  }

  for (var i = 0; i < patterns.length; i++) {
    if (files.indexOf(patterns[i]) !== -1) {
      return true;
    }
  }
  return false;
}
