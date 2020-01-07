'use strict';

var utils = require('lazy-cache')(require);
var fn = require;
require = utils; // eslint-disable-line

/**
 * Utils
 */

require('assemble-loader', 'loader');
require('arr-union', 'union');
require('base-cli-process', 'cli');
require('base-config-process', 'config');
require('base-generators', 'generators');
require('base-questions', 'questions');
require('base-runtimes', 'runtimes');
require('base-store', 'store');
require('data-store', 'Store');
require('common-config', 'common');
require('extend-shallow', 'extend');
require('fs-exists-sync', 'exists');
require('isobject', 'isObject');
require('is-valid-app', 'isValid');
require('global-modules', 'gm');
require('log-utils', 'log');
require('resolve-dir');
require('resolve-file', 'resolve');
require('parser-front-matter', 'parser');
require('yargs-parser', 'parse');
require = fn; // eslint-disable-line

utils.stripPrefixes = function(file) {
  file.stem = file.stem.replace(/^_/, '.');
  file.stem = file.stem.replace(/^\$/, '');
};

/**
 * argv options
 */

utils.opts = {
  boolean: ['diff'],
  alias: {
    add: 'a',
    config: 'c',
    configfile: 'f',
    diff: 'diffOnly',
    global: 'g',
    help: 'h',
    init: 'i',
    silent: 'S',
    verbose: 'v',
    version: 'V',
    remove: 'r'
  }
};

utils.parseArgs = function(argv) {
  var obj = utils.parse(argv, utils.opts);
  if (obj.init) {
    obj._.push('init');
    delete obj.init;
  }
  if (obj.help) {
    obj._.push('help');
    delete obj.help;
  }
  return obj;
};

utils.remove = function(arr, names) {
  return arr.filter(function(ele) {
    return names.indexOf(ele) === -1;
  });
};

/**
 * Return true if any of the given `tasks` are in the specified `list`
 */

utils.contains = function(list, tasks) {
  return utils.arrayify(list).some(function(ele) {
    return ~tasks.indexOf(ele);
  });
};

/**
 * Return true if the given array is empty
 */

utils.isEmpty = function(val) {
  return utils.arrayify(val).length === 0;
};

/**
 * Cast `val` to an array
 */

utils.toArray = function(val) {
  return typeof val === 'string' ? val.split(',') : val;
};

/**
 * Cast `val` to an array
 */

utils.arrayify = function(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
};

/**
 * Add logging methods
 */

utils.logger = function(options) {
  return function() {

    function logger(prop, color) {
      color = color || 'dim';
      return function(msg) {
        var rest = [].slice.call(arguments, 1);
        return console.log
          .bind(console, utils.log.timestamp + (prop ? (' ' + utils.log[prop]) : ''))
          .apply(console, [utils.log[color](msg)].concat(rest));
      };
    };

    Object.defineProperty(this, 'log', {
      configurable: true,
      get: function() {
        function log() {
          return console.log.apply(console, arguments);
        }
        log.path = function(msg) {
          return logger(null, 'dim').apply(null, arguments);
        };
        log.time = function(msg) {
          return logger(null, 'dim').apply(null, arguments);
        };
        log.warn = function(msg) {
          return logger('warning', 'yellow').apply(null, arguments);
        };
        log.success = function() {
          return logger('success', 'green').apply(null, arguments);
        };

        log.info = function() {
          return logger('info', 'cyan').apply(null, arguments);
        };

        log.error = function() {
          return logger('error', 'red').apply(null, arguments);
        };
        log.__proto__ = utils.log;
        return log;
      }
    });
  };
};
/**
 * Expose utils
 */

module.exports = utils;
