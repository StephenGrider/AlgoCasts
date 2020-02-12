'use strict';

var utils = require('lazy-cache')(require);
var fn = require;
require = utils; // eslint-disable-line

/**
 * Lazily required module dependencies
 */

require('arr-union', 'union');
require('cache-base', 'Cache');
require('define-property', 'define');
require('class-utils', 'cu');
require('mixin-deep', 'merge');
require = fn; // eslint-disable-line

/**
 * Run an array of functions by passing each function
 * to a method on the given object specified by the given property.
 *
 * @param  {Object} `obj` Object containing method to use.
 * @param  {String} `prop` Name of the method on the object to use.
 * @param  {Array} `arr` Array of functions to pass to the method.
 */

utils.run = function(obj, prop, arr) {
  var len = arr.length, i = 0;
  while (len--) {
    obj[prop](arr[i++]);
  }
};

utils.pascal = function(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

utils.namespace = function(app, parent) {
  var parentSegs = parent ? parent.split(':') : [];
  var segs = app._name.split(':');

  var namespace = utils.union([], parentSegs, segs);
  app._namespace = namespace.join(':');
};

/**
 * Expose `utils` modules
 */

module.exports = utils;
