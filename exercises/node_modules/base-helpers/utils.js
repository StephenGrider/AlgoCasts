'use strict';

var debug = require('debug')('base:helpers');
var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

/**
 * Lazily required module dependencies
 */

require('define-property', 'define');
require('is-valid-app');
require('load-helpers', 'loader');
require = fn;

/**
 * Return false if `app` is not a valid instance of `Base`, or
 * the `base-helpers` plugin is alread registered.
 */

utils.isValid = function(app) {
  if (utils.isValidApp(app, 'base-helpers', ['app', 'views', 'collection'])) {
    debug('initializing <%s>, from <%s>', __filename, module.parent.id);
    return true;
  }
  return false;
};

/**
 * Arrayify the given value by casting it to an array.
 */

utils.arrayify = function(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
};

/**
 * Expose `utils` modules
 */

module.exports = utils;
