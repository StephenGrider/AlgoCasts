/*!
 * to-file <https://github.com/jonschlinkert/to-file>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var path = require('path');
var utils = require('./utils');

module.exports = function toFile(filepath, pattern, options) {
  var isPattern = utils.isValidGlob(pattern);
  if (!isPattern) {
    options = pattern;
    pattern = null;
  }
  var opts = utils.extend({}, options);
  var obj = { contents: null };

  obj.cwd = path.resolve(opts.cwd || process.cwd());
  obj.path = path.resolve(obj.cwd, filepath);

  if (isPattern) {
    if (Array.isArray(pattern)) {
      pattern = pattern[0];
    }
    obj.base = path.resolve(obj.cwd, utils.parent(pattern));
  } else {
    obj.base = path.resolve(opts.base || obj.cwd);
  }

  var File = typeof opts.File === 'function' ? opts.File : utils.File;
  var file = new File(obj);
  file.options = opts;

  if (opts.file) {
    for (var key in opts.file) {
      file[key] = opts.file[key];
    }
    delete opts.file;
  }

  if (!file.stat) {
    file.stat = opts.stat || stats(file);
    delete opts.stat;
  }

  contents(file, opts);
  return file;
};

function stats(file) {
  utils.define(file, '_stat', null);
  utils.define(file, 'stat', {
    configurable: true,
    set: function(stat) {
      this._stat = stat;
    },
    get: function() {
      return this._stat || (this._stat = utils.tryStat(this.path));
    }
  });
}

function contents(file, opts) {
  utils.define(file, '_contents', null);
  utils.define(file, 'contents', {
    configurable: true,
    set: function(contents) {
      this._contents = contents;
    },
    get: function() {
      utils.contents.sync(this, opts);
      return this._contents;
    }
  });
}
