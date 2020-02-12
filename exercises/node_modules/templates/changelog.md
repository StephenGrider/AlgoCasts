### v0.24.0

- Bumps [base-data][] which removed `renameKey` option used when loading data. Use the `namespace` option instead.

### v0.23.0

- Bumps [base-engine][] to fix a bug in [engine-cache][].

### v0.22.2

- fixes `List` bug that was caused collection helpers to explode

### v0.22.0

There should be no breaking changes in this release. If you experience a regression, please [create an issue](../../issues).

- Externalizes a few core plugins to: [base-helpers][], [base-routes][], and [base-engine][]. The goal is to allow you to use only the plugins you need in your builds.
- Improvements to lookup functions: `app.getView()` and `app.find()`
- Bumps [base][] to take advantages of code optimizations.

### v0.21.0

**Breaking changes**

- The `queue` property has been removed, as well as related code for loading views using events. This behavior can easily be added using plugins or existing emitters.

**Non-breaking**

- The `View` and `Item` class have been externalized to modules [vinyl-item][] and [vinyl-view][] so they can be used in other libraries.

### v0.20.0

- **Context**: In general, context should be merged so that the most specific context wins over less specific. This fixes one case where locals was winning over front-matter
- **Helpers**: Exposes `.ctx()` method on helper context, to simplify merging context in non-built-in helpers
- **Engines**: Fixes bug that was using default engine on options instead of engine that matches view file extension.

### v0.19.0

- Numerous [dependency updates](https://github.com/jonschlinkert/templates/commit/6f78d88aa1920b84d20177bf35942e596b8e58b5)

### v0.18.0

- [Fixes inheritance bug](https://github.com/jonschlinkert/templates/commit/66b0d885648600c97b4a158eaebf3e95443ec66e) that only manifests in node v0.4.0
- Improved [error handling in routes](https://github.com/jonschlinkert/templates/commit/d7654b74502465587da1e490c09e486fbf43f6db)

### v0.17.0

- Removed `debug` methods and related code
- Improve layout handling with respect to template types (`partial`, `renderable` and `layout`)
- Update dependencies

### v0.16.0

- Improved context handling
- Ensure collection middleware is handled [after app middleware](https://github.com/jonschlinkert/templates/commit/f47385f5172a2773c3ab2a969ebfccc533ec5e27)

### v0.15.0

- removes `.removeItem` method that was deprecated in v0.10.7 from `List`
- `.handleView` is deprecated in favor of `.handleOnce` and will be removed in a future version. Start using `.handleOnce` now.
- adds a static `Templates.setup()` method for initializing any setup code that should have access to the instance before any other use code is run.
- upgrade to [base-data][] v0.4.0, which adds `app.option.set`, `app.option.get` and `app.option.merge`

### v0.14.0

Although 99% of users won't be effected by the changes in this release, there were some **potentially breaking changes**.

- The `render` and `compile` methods were streamlined, making it clear that `.mergePartials` should not have been renamed to `mergePartialsSync`. So that change was reverted.
- Helper context: Exposes a `this.helper` object to the context in helpers, which has the helper name and options that were set specifically for that helper
- Helper context: Exposes a `this.view` object to the context in helpers, which is the current view being rendered. This was (and still is) always expose on `this.context.view`, but it makes sense to add this to the root of the context as a convenience. We will deprecate `this.context.view` in a future version.
- Helper context: `.get`, `.set` and `.merge` methods on `this.options`, `this.context` and the `this` object in helpers.

### v0.13.0

- All template handling is async by default. Instead of adding `.compileSync`, we felt that it made more sense to add `.compileAsync`, since `.compile` is a public method and most users will expect it to be sync, and `.compile` methods with most engines are typically sync. In other words, `.compileAsync` probably won't be seen by most users, but we wanted to explain the decision to go against node.js naming conventions.
- Improved layout detection and handling

### v0.12.0

- Adds helper methods, [.hasAsyncHelper](#hasasynchelper), [.hasHelper](#hashelper), [.getAsyncHelper](#getasynchelper), and [.getHelper](#gethelper)
- Ensures that both collection and app routes are handled when both are defined for a view

### v0.11.0

- Default `engine` can now be defined on `app` or a collection using using `app.option('engine')`, `views.option('engine')`
- Default `layout` can now defined using `app.option('layout')`, `views.option('layout')`. No changes have been made to `view.layout`, it should work as before. Resolves [issue/#818](../../issues/818)
- Improves logic for finding a layout, this should make layouts easier to define and find going forward.
- The built-in `view` helper has been refactored completely. The helper is now async and renders the view before returning its content.
- Adds `isApp`, `isViews`, `isCollection`, `isList`, `isView`, `isGroup`, and `isItem` static methods. All return true when the given value is an instance of the respective class.
- Adds `deleteItem` method to List and Collection, and `deleteView` method to Views.
- Last, the static `_.proto` property which is only exposed for unit tests was renamed to `_.plugin`.

### v0.10.7

- Force-update [base][] to v0.6.4 to take advantage of `isRegistered` feature.

### v0.10.6

- Re-introduces fs logic to `getView`, now that the method has been refactored to be faster.

### v0.10.0

- `getView` method no longer automatically reads views from the file system. This was undocumented before and, but it's a breaking change nonetheless. The removed functionality can easily be done in a plugin.

### v0.9.5

- Fixes error messages when no engine is found for a view, and the view does not have a file extension.

### v0.9.4

- Fixes a lookup bug in render and compile that was returning the first view that matched the given name from _any_ collection. So if a partial and a page shared the same name, if the partial was matched first it was returned. Now the `renderable` view is rendered (e.g. page)

### v0.9.0

- _breaking change_: changes parameters on `app.context` method. It now only accepts two arguments, `view` and `locals`, since `ctx` (the parameter that was removed) was technically being merged in twice.

### v0.8.0

- Exposes `isType` method on `view`. Shouldn't be any breaking changes.

### v0.7.0

- _breaking change_: renamed `.error` method to `.formatError`
- adds `mergeContext` option
- collection name is now emitted with `view` and `item` as the second argument
- adds `isType` method for checking the `viewType` on a collection
- also now emits an event with the collection name when a view is created

### v0.5.1

- fixes bug where `default` layout was automatically applied to partials, causing an infinite loop in rare cases.
