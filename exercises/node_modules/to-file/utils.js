'use strict';

var fs = require('fs');
var path = require('path');
var utils = require('lazy-cache')(require);

/**
 * Lazily required module dependencies
 */

var fn = require;
require = utils;
require('define-property', 'define');
require('file-contents', 'contents');
require('extend-shallow', 'extend');
require('glob-parent', 'parent');
require('is-valid-glob');
require('isobject', 'isObject');
require('vinyl', 'File');
require = fn;

utils.tryStat = function tryStat(fp, opts) {
  try {
    return fs.lstatSync(fp);
  } catch (err) {}

  try {
    opts = opts || {};
    return fs.lstatSync(path.resolve(opts.cwd, fp));
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }
  // only reached when `nonull` is passed to glob
  return null;
};

/**
 * Expose `utils`
 */

module.exports = utils;
