'use strict';

var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

/**
 * Lazily required module dependencies
 */

require('assemble-handle', 'handle');
require('is-registered');
require('is-valid-instance');
require('match-file', 'match');
require('src-stream', 'src');
require('through2', 'through');
require = fn;

/**
 * Utils
 */

utils.isValid = function(app, types) {
  if (!utils.isValidInstance(app, types)) {
    return false;
  }
  if (utils.isRegistered(app, 'assemble-streams')) {
    return false;
  }
  return true;
};

/**
 * Expose `utils` modules
 */

module.exports = utils;
