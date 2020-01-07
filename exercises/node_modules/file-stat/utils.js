'use strict';

var utils = require('lazy-cache')(require);

/**
 * Temporarily re-assign `require` so we can fool browserify
 * into recognizing lazy deps.
 */

var fn = require;
require = utils;

/**
 * Lazily required module dependencies
 * (here, `require` is actually lazy-cache)
 */

require('graceful-fs', 'fs');
require('through2', 'through');

/**
 * Reset require
 */

require = fn;

/**
 * Expose utils
 */

module.exports = utils;
