'use strict';

var through = require('through2');
var extend = require('extend-shallow');
var Questions = require('question-cache');

module.exports = function(options) {
  var opts = extend({key: 'relative', save: false}, options);
  var msg = opts.message || 'Which files do you want to write?';
  var questions = new Questions();
  var paths = [];
  var files = {};

  return through.obj(function(file, enc, next) {
    if (opts.skip) {
      next(null, file);
      return;
    }

    var key = fileKey(file, opts);
    paths.push(key);
    files[key] = file;
    next();
  }, function(next) {
    var stream = this;

    if (typeof opts.choices === 'string') {
      opts.choices = [opts.choices];
    }

    if (Array.isArray(opts.choices)) {
      opts.choices.forEach(function(filepath) {
        stream.push(files[filepath]);
      });
      next();
      return;
    }

    if (paths.length === 0) {
      next();
      return;
    }

    questions.choices('files', msg, paths);
    questions.ask('files', opts, function(err, answers) {
      if (err || !answers.files) {
        next(err);
        return;
      }
      answers.files.forEach(function(filepath) {
        stream.push(files[filepath]);
      });
      next();
    });
  });
};

function fileKey(file, opts) {
  if (typeof opts.key === 'string') {
    return file[opts.key];
  }
  if (typeof opts.key === 'function') {
    return opts.key(file);
  }
  return file.relative;
}
