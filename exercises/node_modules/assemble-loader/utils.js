'use strict';

var utils = require('lazy-cache')(require);

/**
 * Lazily required module dependencies
 */

var fn = require;
require = utils;
require('extend-shallow', 'extend');
require('file-contents', 'contents');
require('fs-exists-sync', 'exists');
require('has-glob');
require('is-registered');
require('is-valid-glob');
require('is-valid-instance');
require('isobject', 'isObject');
require('load-templates', 'loader');
require = fn;

/**
 * Return true if app is a valid instance
 */

utils.isValid = function(app) {
  if (!utils.isValidInstance(app)) {
    return false;
  }
  if (utils.isRegistered(app, 'assemble-loader')) {
    return false;
  }
  return true;
};

/**
 * Return `true` if the given value is a glob pattern or has a
 * glob pattern if it's an array
 */

utils.isGlob = function(key, val) {
  if (typeof val === 'undefined' || utils.isObject(val)) {
    return utils.hasGlob(key);
  }
  return false;
};

/**
 * Return true if the given value is an object.
 * @return {Boolean}
 */

utils.hasAny = function(obj, keys) {
  var len = keys.length;
  while (len--) {
    if (obj.hasOwnProperty(keys[len])) {
      return true;
    }
  }
  return false;
};

/**
 * Return true if the given value looks like an options
 * object.
 */

utils.isOptions = function(val) {
  if (!utils.isObject(val)) {
    return false;
  }
  if (val.isView || val.isItem || val._isVinyl) {
    return false;
  }
  return utils.hasAny(val, ['base', 'cwd']);
};

/**
 * Return true if a key looks like a valid filepath,
 * not a glob pattern or the key for a view object
 * and not a view.
 */

utils.isFilepath = function(key, value) {
  return (typeof key === 'string' && typeof value === 'undefined')
    || utils.isOptions(value);
};

/**
 * Expose utils
 */

module.exports = utils;
