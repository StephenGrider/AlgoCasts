'use strict';

var Emitter = require('component-emitter');
var debug = require('debug');
var util = require('util');

function namespace(name) {
  var utils = require('./utils');
  var fns = [];

  var Cache = utils.Cache;
  if (name) {
    Cache = Cache.namespace(name);
  }

  /**
   * Create an instance of `Base` with `config` and `options`.
   *
   * ```js
   * var app = new Base({baz: 'qux'}, {yeah: 123, nope: 456});
   *
   * app.set('foo', 'bar');
   *
   * console.log(app.get('foo')); //=> 'bar'
   * console.log(app.get('baz')); //=> 'qux'
   * console.log(app.get('yeah')); //=> undefined
   *
   * console.log(app.foo); //=> 'bar'
   * console.log(app.baz); //=> 'qux'
   * console.log(app.yeah); //=> undefined
   *
   * console.log(app.options.yeah); //=> 123
   * console.log(app.options.nope); //=> 456
   * ```
   *
   * @param {Object} `config` passed to [cache-base][]
   * @param {Object} `options`
   * @api public
   */

  function Base(config, options) {
    if (!(this instanceof Base)) {
      return new Base(config, options);
    }
    Cache.call(this, config);
    this.initBase(config, options);
  }

  /**
   * Inherit cache-base
   */

  util.inherits(Base, Cache);

  /**
   * Add static emitter methods
   */

  Emitter(Base);

  /**
   * Initialize `Base` defaults with the given `config` object
   */

  Base.prototype.initBase = function(config, options) {
    this.options = utils.merge({}, this.options, options);
    this.cache = this.cache || {};

    /**
     * Getter/setter for exposing a `base` (shared) instance of `base`
     * applications.
     *
     * This property only works when a "parent" instance is created on `app`.
     * If `app.parent` is defined, the `app.base` getter ensures that the `base`
     * instance is always the very first instance.
     *
     * ```js
     * var a = new Base();
     * a.foo = 'bar';
     *
     * var b = new Base();
     * b.parent = a;
     *
     * var c = new Base();
     * c.parent = b;
     *
     * console.log(c.foo);
     * //=> undefined
     * console.log(c.base.foo);
     * //=> 'bar'
     * ```
     * @name .base
     * @api public
     */

    Object.defineProperty(this, 'base', {
      configurable: true,
      get: function() {
        return this.parent ? this.parent.base : this;
      }
    });

    this.is('base');
    this.define('_callbacks', this._callbacks);
    this.define('registered', {});

    if (name) this[name] = {};
    if (typeof config === 'object') {
      this.visit('set', config);
    }
    utils.run(this, 'use', fns);
  };

  /**
   * Set the given `name` on `app._name` and `app.is*` properties. Used for doing
   * lookups in plugins.
   *
   * ```js
   * app.is('foo');
   * console.log(app._name);
   * //=> 'foo'
   * console.log(app.isFoo);
   * //=> true
   * app.is('bar');
   * console.log(app.isFoo);
   * //=> true
   * console.log(app.isBar);
   * //=> true
   * console.log(app._name);
   * //=> 'bar'
   * ```
   * @name .is
   * @param {String} `name`
   * @return {Boolean}
   * @api public
   */

  Base.prototype.is = function(name) {
    if (typeof name === 'function') {
      this.constructor = name;
      name = this.constructor.name.toLowerCase();
    }

    var parent = (this._namespace || this._name || '').toLowerCase();
    name = name.toLowerCase();

    this.define('is' + utils.pascal(name), true);
    this.define('_name', name);
    this.define('_appname', name);

    this.define('_namespace', this._name);
    utils.namespace(this, parent);
    this.define('debug', debug(this._namespace));

    this.debug.append = function(prop) {
      this.namespace = parent + ':' + prop;
    };
    return this;
  };

  /**
   * Returns true if a plugin has already been registered on an instance.
   *
   * Plugin implementors are encouraged to use this first thing in a plugin
   * to prevent the plugin from being called more than once on the same
   * instance.
   *
   * ```js
   * var base = new Base();
   * base.use(function(app) {
   *   if (app.isRegistered('myPlugin')) return;
   *   // do stuff to `app`
   * });
   *
   * // to also record the plugin as being registered
   * base.use(function(app) {
   *   if (app.isRegistered('myPlugin', true)) return;
   *   // do stuff to `app`
   * });
   * ```
   * @name .isRegistered
   * @emits `plugin` Emits the name of the plugin.
   * @param {String} `name` The plugin name.
   * @param {Boolean} `register` If the plugin if not already registered, to record it as being registered pass `true` as the second argument.
   * @return {Boolean} Returns true if a plugin is already registered.
   * @api public
   */

  Base.prototype.isRegistered = function(name, register) {
    if (this.registered.hasOwnProperty(name)) {
      return true;
    }
    if (register !== false) {
      this.registered[name] = true;
      this.emit('plugin', name);
    }
    return false;
  };

  /**
   * Throws an error when plugin `name` is not registered.
   *
   * ```js
   * var base = new Base();
   * base.use(function(app) {
   *   app.assertPlugin('base-foo');
   *   app.assertPlugin('base-bar');
   *   app.assertPlugin('base-baz');
   * });
   * ```
   * @name .assertPlugin
   * @param {String} `name` The plugin name.
   * @api public
   */

  Base.prototype.assertPlugin = function(name) {
    if (!this.registered.hasOwnProperty(name)) {
      throw new Error('expected plugin ' + name + ' to be registered');
    }
  };

  /**
   * Define a plugin function to be called immediately upon init.
   * Plugins are chainable and the only parameter exposed to the
   * plugin is the application instance.
   *
   * ```js
   * var app = new Base()
   *   .use(foo)
   *   .use(bar)
   *   .use(baz)
   * ```
   * @name .use
   * @emits `use` with no arguments.
   * @param {Function} `fn` plugin function to call
   * @return {Object} Returns the item instance for chaining.
   * @api public
   */

  Base.prototype.use = function(fn) {
    fn.call(this, this);
    this.emit('use');
    return this;
  };

  /**
   * Lazily invoke a registered plugin. **Note** that this method can only
   * be used with:
   *
   * 1. plugins that _add a single method or property_ to `app`
   * 2. plugins that do not (themselves) add a getter/setter property (they're already lazy)
   * 3. plugins that do not return a function
   *
   * ```js
   * app.lazy('store', require('base-store'));
   * ```
   * @name .lazy
   * @param {String} `prop` The name of the property or method added by the plugin.
   * @param {Function} `fn` The plugin function
   * @param {Object} `options` Options to use when the plugin is invoked.
   * @return {Object} Returns the instance for chaining
   * @api public
   */

  Base.prototype.lazy = function(prop, fn, opts) {
    this.define(prop, {
      configurable: true,
      set: function(val) {
        this.define(prop, val);
      },
      get: function() {
        this.use(fn(opts));
        return this[prop];
      }
    });
    return this;
  };

  /**
   * Define a non-enumerable property on the instance. Dot-notation
   * is **not supported** with `define`.
   *
   * ```js
   * // arbitrary `render` function using lodash `template`
   * define('render', function(str, locals) {
   *   return _.template(str)(locals);
   * });
   * ```
   * @name .define
   * @emits `define` with `key` and `value` as arguments.
   * @param {String} `key` The name of the property to define.
   * @param {any} `value`
   * @return {Object} Returns the instance for chaining.
   * @api public
   */

  Base.prototype.define = function(key, val) {
    this.emit('define', key, val);
    utils.define(this, key, val);
    return this;
  };

  /**
   * Mix property `key` onto the Base prototype. If base-methods
   * is inherited using `Base.extend` this method will be overridden
   * by a new `mixin` method that will only add properties to the
   * prototype of the inheriting application.
   *
   * @name .mixin
   * @param {String} `key`
   * @param {Object|Array} `val`
   * @return {Object} Returns the instance for chaining.
   * @api public
   */

  Base.prototype.mixin = function(key, val) {
    Base.prototype[key] = val;
    return this;
  };

  /**
   * Static method for adding global plugin functions that will
   * be added to an instance when created.
   *
   * ```js
   * Base.use(function(app) {
   *   app.foo = 'bar';
   * });
   * var app = new Base();
   * console.log(app.foo);
   * //=> 'bar'
   * ```
   *
   * @param  {Function} `fn` Plugin function to use on each instance.
   * @api public
   */

  Base.use = function(fn) {
    fns.push(fn);
  };

  /**
   * Static method for inheriting both the prototype and
   * static methods of the `Base` class. See [class-utils][]
   * for more details.
   *
   * @api public
   */

  Base.extend = utils.cu.extend(Base, function(Ctor, Parent) {
    Ctor.prototype.mixins = [];
    Ctor.mixin = function(fn) {
      var mixin = fn(Ctor.prototype, Ctor);
      if (typeof mixin === 'function') {
        Ctor.prototype.mixins.push(mixin);
      }
    };

    Ctor.prototype.mixin = function(key, value) {
      Ctor.prototype[key] = value;
      return this;
    };

    Ctor.mixins = function(Child) {
      utils.run(Child, 'mixin', Ctor.prototype.mixins);
    };
  });

  /**
   * Static method for adding mixins to the prototype.
   * When a function is returned from the mixin plugin, it will be added to
   * an array so it can be used on inheriting classes via `Base.mixins(Child)`.
   *
   * ```js
   * Base.mixin(function fn(proto) {
   *   proto.foo = function(msg) {
   *     return 'foo ' + msg;
   *   };
   *   return fn;
   * });
   * ```
   *
   * @param  {Function} `fn` Function to call
   * @api public
   * @name  Base.mixin
   */

  Base.prototype.mixins = Base.prototype.mixins || [];
  Base.mixin = function(fn) {
    var mixin = fn(Base.prototype, Base);
    if (typeof mixin === 'function') {
      Base.prototype.mixins.push(mixin);
    }
  };

  /**
   * Static method for running currently saved global mixin functions against a child constructor.
   *
   * ```js
   * Base.extend(Child);
   * Base.mixins(Child);
   * ```
   *
   * @param  {Function} `Child` Constructor function of a child class
   * @api public
   * @name  Base.mixins
   */

  Base.mixins = function(Child) {
    utils.run(Child, 'mixin', Base.prototype.mixins);
  };

  /**
   * Similar to `util.inherit`, but copies all static properties,
   * prototype properties, and descriptors from `Provider` to `Receiver`.
   * [class-utils] for more details.
   *
   * @api public
   */

  Base.inherit = utils.cu.inherit;
  Base.bubble = utils.cu.bubble;
  return Base;
}

/**
 * Expose `base-methods`
 */

module.exports = namespace();

/**
 * Allow users to define a namespace
 */

module.exports.namespace = namespace;
