### v0.24.0

- Bumps [templates][] to v0.24.0 to use the latest [base-data][] which removed the `renameKey` option from the `.data` method. Use the `namespace` option instead.

### v0.23.0

- Bumps [templates][] to v0.23.0 to fix bug with double rendering in [engine-cache][].

### v0.22.0

Bumps [templates][] to v0.22.0 to take advantage of fixes and improvements to lookup methods: `.find` and `getView`. No API changes were made. Please [let us know](../../issues) if regressions occur.

- fixes `List` bug that was caused collection helpers to explode
- Improvements to lookup functions: `app.getView()` and `app.find()`
- Bumps [base][] to take advantages of code optimizations.

### v0.21.0

- Bumps [templates][] to v0.21.0. Support for the `queue` property was removed on collections. See [templates][] for additional details.

### v0.20.0

- Bumps [templates][] to v0.20.0. Some changes were made to context handling that effected one unit test out of ~1,000. although it's unlikely you'll be effected by the change, it warrants a minor bump

### v0.19.0

- Bumps [templates][] to v0.19.0
- Externalizes tests (temporarily) to base-test-runner, until we get all of the tests streamlined to the same format.

### v0.18.0

- Bumps [assemble-loader][] to v0.5.0, which includes which fixes a bug where `renameKey` was not always being used when defined on collection loader options.
- Bumps [templates][] to v0.18.0, which includes fixes for resolving layouts

### v0.17.0

- Bumps [templates][] to v0.17.0

### v0.16.0

- Bumps [assemble-render-file][] to v0.5.0 and [templates][] to v0.16.0

### v0.15.0

- Bumps [assemble-streams][] to v0.5.0

### v0.14.0

- Bumps [templates][] to v0.15.1
- adds logging methods from [base-logger][] (`.log`, `.verbose`, etc)
- `.handleView` method is now deprecated, use `.handleOnce` instead
- Private method `.mergePartialsSync` rename was reverted to `.mergePartials` to be consistent with other updates in `.render` and `.compile`. No other breaking changes, but some new features were added to [templates][] for handling context in views and helpers.

### v0.13.0

- Breaking change: bumps [templates][] to v0.13.0 to fix obscure rendering bug when multiple duplicate partials were rendered in the same view. But the fix required changing the `.mergePartials` method to be async. If you're currently using `.mergePartials`, you can continue to do so synchronously using the `.mergePartialsSync` method.

### v0.9.0

- Updates [composer][] to v0.11.0, which removes the `.watch` method in favor of using the [base-watch][] plugin.

### v0.8.0

- Bumps several deps. [templates][] was bumped to 0.9.0 to take advantage of event handling improvements.

### v0.7.0

- Bumps [templates][] to 0.8.0 to take advantage of `isType` method for checking a collection type, and a number of improvements to how collections and views are instantiated and named.

### v0.6.0

- Bumps [assemble-fs][] plugin to 0.5.0, which introduces `onStream` and `preWrite` middleware handlers.
- Bumps [templates][] to 0.7.0, which fixes how non-cached collections are initialized. This was done as a minor instead of a patch since - although it's a fix - it could theoretically break someone's setup.

### v0.5.0

- Bumps [templates][] to latest, 0.6.0, since it uses the latest [base-methods][], which introduces prototype mixins. No API changes.

### v0.4.0

- Removed [emitter-only][] since it was only includes to be used in the default listeners that were removed in an earlier release. In rare cases this might be a breaking change, but not likely.
- Adds lazy-cache
- Updates [assemble-streams][] plugin to latest
