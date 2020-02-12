'use strict';

var utils = require('./utils');

module.exports = function fileStats() {
  return utils.through.obj(function (file, enc, cb) {
    getStats(file, function (err, res) {
      if (err) {
        cb(err);
        return;
      }
      cb(null, res);
    });
  });
};

function getStats(file, cb) {
  utils.fs.lstat(file.path, function (err, stat) {
    if (err) {
      cb(err);
      return;
    }
    file.stat = stat;
    cb(null, file);
  });
}

/**
 * Expose `getStats`
 */

module.exports.getStats = getStats;
