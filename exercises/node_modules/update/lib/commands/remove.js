'use strict';

var utils = require('../utils');

/**
 * Remove names from the list of locally or globally stored updaters.
 *
 * ```sh
 * # remove updater `foo`
 * $ update -r foo
 * # or
 * $ update -rc foo
 * # sugar for
 * $ update --remove --config foo
 * # remove globally stored updaters
 * $ update -rg foo
 * # sugar for
 * $ update --remove --global foo
 * ```
 * @name tasks
 * @api public
 * @cli public
 */

module.exports = function(app, options) {
  return function(names, key, config, next) {
    if (typeof names === 'string') {
      names = utils.toArray(names);
    }

    var updaters = names.map(function(name) {
      return 'updaters.' + name;
    });

    if (!config.config) {
      app.globals.del(updaters);

    } else {
      var list = app.pkg.get('update.updaters');
      app.pkg.del('update.updaters');

      var rest = utils.remove(list, names);
      if (rest.length) {
        app.pkg.set('update.updaters', rest);
        app.pkg.save();
      }
    }
    next();
  };
};
