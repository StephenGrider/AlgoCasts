'use strict';

var fs = require('fs');
var path = require('path');
var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

/**
 * Lazily required module dependencies
 */

require('define-property', 'define');
require('extend-shallow', 'extend');
require('glob-parent', 'parent');
require('has-glob');
require('is-valid-glob', 'isValidGlob');
require('matched', 'glob');
require('to-file');
require = fn;

/**
 * utils
 */

utils.isObject = function(val) {
  return val && typeof val === 'object' && !Array.isArray(val);
};

utils.arrayify = function(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
};

utils.isView = function(view) {
  if (!utils.isObject(view)) {
    return false;
  }
  if (view.isView || view.isItem) {
    return true;
  }
  return view.hasOwnProperty('contents')
    || view.hasOwnProperty('path')
    || view.isView;
};

utils.tryStat = function(filepath) {
  try {
    return fs.statSync(filepath);
  } catch(err) {}
};

utils.renameKey = function(file, opts) {
  if (opts && typeof opts.renameKey === 'function') {
    return opts.renameKey(file.path);
  }
  return (file.base && file.path) ? file.relative : file.path;
};

/**
 * Return true if the given value is a buffer
 */

utils.isBuffer = function(val) {
  if (val && val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
};

/**
 * Return true if the given value is a stream.
 */

utils.isStream = function(val) {
  return utils.isObject(val)
    && (typeof val.pipe === 'function')
    && (typeof val.on === 'function');
};

utils.syncContents = function(view, contents) {
  if (contents === null
    || typeof view._contents === 'undefined'
    || typeof view._content === 'undefined') {
    utils.define(view, '_contents', null);
    utils.define(view, '_content', null);
  }
  if (typeof contents === 'string') {
    view._contents = new Buffer(contents);
    view._content = contents;
  }
  if (utils.isBuffer(contents)) {
    view._contents = contents;
    view._content = contents.toString();
  }
  if (utils.isStream(contents)) {
    view._contents = contents;
    view._content = contents;
  }
};

/**
 * Expose `utils`
 */

module.exports = utils;
