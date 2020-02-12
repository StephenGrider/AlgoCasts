'use strict';

var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

/**
 * Lazily required module dependencies
 * (here, `require` is actually lazy-cache)
 */

require('file-stat', 'stats');
require('graceful-fs', 'fs');
require('extend-shallow', 'extend');
require('through2', 'through');
require('is-utf8');
require = fn;

utils.stripBom = function(val) {
  if (utils.isUtf8(val) && val.slice(0, 3).toString() === '\uFEFF') {
    return val.slice(3);
  }
  return val;
};

/**
 * Expose utils
 */

module.exports = utils;
