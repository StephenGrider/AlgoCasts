'use strict';

var path = require('path');
var strip = require('strip-color');
var through = require('through2');
var table = require('text-table');

module.exports = function(app) {
  function bold(str) {
    return app.log.underline(app.log.bold(str));
  }

  var list = [[bold('version'), bold('name'), bold('alias')]];
  return through.obj(function(file, enc, next) {
    var pkgPath = path.resolve(file.path, 'package.json');
    var pkg = require(pkgPath);
    list.push([app.log.gray(pkg.version), file.basename, app.log.cyan(file.alias)]);
    next();
  }, function(cb) {
    console.log();
    console.log(table(list, {
      stringLength: function(str) {
        return strip(str).length;
      }
    }));

    console.log();
    console.log(app.log.magenta(list.length + ' updaters installed'));
    console.log();
    cb();
  });
};

