'use strict';

var debug = require('debug')('base:templates:helper');
var utils = require('../utils');
var List = require('../list');

module.exports = function(app, collection) {
  var plural = collection.options.plural;

  /**
   * Creates an async helper for each view collection, and exposes
   * the collection as an instance of `List` to the helper context.
   *
   * If the helper is used as a handlebars block helper, the collection
   * array will be exposed as context to `options.fn()`, otherwise
   * the `List` array is returned.
   *
   * ```js
   * // create a collection
   * app.create('pages');
   *
   * // use the `pages` helper
   * // {{#pages}} ... {{/pages}}
   * ```
   * @param {Object} `options` Locals or handlebars options object
   * @param {String} `callback` Handled internally by the templates library.
   * @api public
   */

  app.asyncHelper(plural, function listHelper(options, cb) {
    if (typeof options === 'function') {
      cb = options;
      options = {};
    }

    options = options || {};
    if (typeof options === 'string') {
      var singular = this.app.getAsyncHelper(collection.options.inflection) ||
        app.getAsyncHelper(collection.options.inflection);
      return singular.apply(this, arguments);
    }

    debug('list helper "%s", "%j"', plural, options);
    var ctx = new List(collection);

    // render block helper with list as context
    if (typeof options.fn === 'function' && options.hash) {
      cb(null, options.fn(ctx));
      return;
    }

    // return list when not used as a block helper
    cb(null, ctx);
  });

};
