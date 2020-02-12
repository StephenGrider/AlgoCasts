'use strict';

var utils = require('./utils');

/**
 * Add the `contents` property to a `file` object.
 *
 * @param  {Object} `options`
 * @return {Object} File object.
 */

module.exports = function fileContents(options) {
  return utils.through.obj(function (file, enc, next) {
    async(file, options, function (err, res) {
      if (err) {
        next(err);
        return;
      }
      next(null, res);
    });
  });
};

/**
 * Async method for getting `file.contents`.
 *
 * @param  {Object} `file`
 * @param  {Object} `options`
 * @param  {Function} `cb`
 * @return {Object}
 */

function async(file, options, cb) {
  if (typeof file !== 'object') {
    throw new TypeError('expected file to be an object');
  }

  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  if (typeof cb !== 'function') {
    throw new TypeError('expected callback to be a function');
  }

  if (!file.stat) {
    return utils.stats.getStats(file, function (err, res) {
      if (err) return cb(err);
      async(res, options, cb);
    });
  }

  try {
    if (file.stat.isDirectory()) {
      return cb(null, file);
    }
  } catch(err) {
    return cb(err);
  }

  var opts = utils.extend({}, options, file.options || {});
  if (opts.noread === true || opts.read === false) {
    return cb(null, file);
  }

  if (opts.buffer !== false) {
    return utils.fs.readFile(file.path, function(err, data) {
      if (err) return cb(err);

      file.contents = utils.stripBom(data);
      cb(null, file);
    });
  }

  try {
    file.contents = utils.fs.createReadStream(file.path);
    cb(null, file);
  } catch (err) {
    cb(err);
  }
}

/**
 * Sync method for getting `file.contents`.
 *
 * @param  {Object} `file`
 * @param  {Object} `options`
 * @return {Object}
 */

function sync(file, options) {
  if (typeof file !== 'object') {
    throw new TypeError('expected file to be an object.');
  }

  if (!file.stat) {
    file.stat = utils.fs.lstatSync(file.path);
  }

  if (file.stat.isDirectory()) {
    return file;
  }

  var opts = utils.extend({}, options, file.options);
  if (opts.noread === true || opts.read === false) {
    return file;
  }

  if (opts.buffer !== false) {
    file.contents = utils.stripBom(utils.fs.readFileSync(file.path));
    return file;
  }

  try {
    file.contents = utils.fs.createReadStream(file.path);
    return file;
  } catch (err) {
    throw err;
  }
}

/**
 * Expose `async` method
 */

module.exports.async = async;

/**
 * Expose `sync` method
 */

module.exports.sync = sync;
