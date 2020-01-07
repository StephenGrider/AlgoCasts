# Release History

## key

Changelog entries are classified using the following labels from [keep-a-changelog][]:

* `added`: for new features
* `changed`: for changes in existing functionality
* `deprecated`: for once-stable features removed in upcoming releases
* `removed`: for deprecated features removed in this release
* `fixed`: for any bug fixes

Custom labels used in this changelog:

* `dependencies`: bumps dependencies
* `housekeeping`: code re-organization, minor edits, or other changes that don't fit in one of the other categories.

**Heads up!**

Please [let us know](../../issues) if any of the following heading links are broken. Thanks!

## [0.7.3] - 2016-07-21

**fixed**

- ensure `app.cwd` in the current instance is the cwd defined by the user on the options or argv.

## [0.7.0] - 2016-07-21

**added**

- as of v0.7.0, we will begin using the [keep-a-changelog][] format for release history
- adds support user-defined templates
- adds support for `app.home()`, which resolves to `~/` or the user-defined `options.homedir`. This directory is used to determine the base directory for user-defined templates.
- adds support for [common-config](https://github.com/jonschlinkert/common-config). Exposed on the `app.common` object (e.g. `app.common.set()` etc)
- adds experimental support for a `home` updater. If an `updatefile.js` exists in the `~/update` directory (this will be customizable, but it's not yet), this file will be loaded and `.use()`d as a plugin before other updaters are loaded. You can use this to set options, add defaults, etc. But you can also run it explictly via commandline with the `update home` command.

**fixed**

- fixes `app.cwd` so that it's updated when `app.options.dest` (`--dest`) is set
- ensure args are parsed consistently

## [0.6.0]

- Swap out [base][] for [assemble-core][] (which uses Base via [templates][]). This allows updaters to seamlessly run generators from [generate][], [assemble][], or [verb][] (when a file needs to be created, or re-created for example)
- Adds [assemble-loader][] to support glob patterns in collection methods

## [0.5.0]

First stable release!

[keep-a-changelog]: https://github.com/olivierlacan/keep-a-changelog
