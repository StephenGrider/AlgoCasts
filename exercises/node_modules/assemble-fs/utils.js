'use strict';

var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

/**
 * Lazily required module dependencies
 */

require('assemble-handle', 'handle');
require('extend-shallow', 'extend');
require('is-valid-app');
require('stream-combiner', 'combine');
require('through2', 'through');
require('vinyl-fs', 'vfs');
require = fn;

/**
 * Expose `utils`
 */

module.exports = utils;
