<p align="center">

<a href="https://github.com/update/update">
<img height="250" width="250" src="https://raw.githubusercontent.com/update/update/master/docs/logo.png">
</a>
</p>

Be scalable! Update is a new, open source developer framework and CLI for automating updates of any kind in code projects.

# update

[![NPM version](https://img.shields.io/npm/v/update.svg?style=flat)](https://www.npmjs.com/package/update) [![NPM downloads](https://img.shields.io/npm/dm/update.svg?style=flat)](https://npmjs.org/package/update) [![Build Status](https://img.shields.io/travis/update/update.svg?style=flat)](https://travis-ci.org/update/update)

You might also be interested in:

* [generate](https://github.com/generate/generate)
* [assemble](https://github.com/assemble/assemble)
* [verb](https://github.com/verbose/verb)

## Quickstart

Install Update's CLI and an example [updater](#updaters) globally:

```sh
$ npm install --global update && updater-example
```

Initialize `update`:

```sh
$ update init
```

Run update:

```sh
$ update
```

## Overview

### What does Update do?

All updating is accomplished using plugins called _updaters_, which are run by command line or API, and can be installed globally, locally, or created in a local `updatefile.js`.

You can create your own [updaters](docs/updaters.md) using Update's API, or install updaters using [npm](https://www.npmjs.com/), to do things like:

* create continuity and consistency across projects
* enforce conventions across all of your projects
* instantly update an old or inherited project to your latest personal preferences (convert tabs to spaces, convert from `jshint` to `eslint` or the other way around, or any other detail)
* reformat code to meet your standards
* convert a config file to a different format (json to yaml, yaml to json, etc)
* update files that are typically excluded from build cycles, and are often forgotten about after they're created. For example:
  - fix dates in copyrights, [licenses](https://github.com/update/updater-license) and banners
  - remove deprecated fields from [project manifests](https://github.com/update/updater-package)
  - update settings in [runtime config](https://github.com/update/updater-eslint) files, preferences in [dotfiles](https://github.com/update/updater-editorconfig)
* after initializing a new project with a project generator, like [generate](https://github.com/generate/generate) or Google's Yeoman, you can "normalize" all of the generated files to use your own preferences

### Why should I use Update?

* **be more productive**: Update eliminates time spent on things that _can be automated_, but typically aren't since they either don't need to be done often, don't fit into the build cycle or a project's deliverables, or because they're usually updated manually. As code projects mature, time spent on these things tend to stay linear or increase as the size of a community grows. If you maintain more than a handful of projects, time spent on these things compounds with each new project under your stewardship.
* **your way, instantly**: updaters can be published to and installed from npm, but you can also easily create your own [personal updaters](docs/symlinking-updaters.md). Once your updaters are setup, just run `update init`, then projects under your maintenance will convert to the the conventions you prefer within milliseconds after running `update`.
* **plugin ecosystem**: any plugins that work with [Base applications](#discovering-plugins) will work also with Update. Which means you can use plugins (or generators) from [assemble](https://github.com/assemble/assemble), [verb](https://github.com/verbose/verb), and [generate](https://github.com/generate/generate), to name a few.
* **well tested**: with more than 1,250 unit tests

### Examples

Here are some random example commits after running `$ update`.

**Project**/**Commit** | **Updaters used**

--- | ---
[generate-scaffold](https://github.com/generate/generate-scaffold/commit/440d71f7293cb1f79445c0161440afbb266a2fbe) |  `editorconfig`, `travis`
[updater-editorconfig](https://github.com/update/updater-editorconfig/commit/b7bd0aa616519440fa4a0d29d3aefac26787cbaf) | `editorconfig`, `eslint`, `travis`, `license`
[expand-target](https://github.com/jonschlinkert/expand-target/commit/48d70a0bc95d8eb3f7def615b7e231e8f93816e8) | `editorconfig`, `eslint`, `travis`, `package`

### Features

* **unparalleled flow control**: through the use of [updaters](docs/updaters.md), [sub-updaters](https://github.com/update/getting-started) and [tasks](docs/tasks.md)
* **generators**: support for [generate](https://github.com/generate/generate) generators. If your updater needs to create new files, there might be a [generator for that](https://www.npmjs.com/browse/keyword/generate-generator). Just use the generator the same way you would use an [updater](docs/updaters.md).
* **render templates**: use templates to create new files, or replace existing files
* **prompts**: It's easy to create custom prompts. Answers to prompts can be used as context for rendering templates, for settings options, determining file names, directory structure, and anything else that requires user feedback.
* **any engine**: use any template engine to render templates, including [handlebars](http://www.handlebarsjs.com/), [lodash](https://lodash.com/), [swig](https://github.com/paularmstrong/swig) and [pug](http://jade-lang.com), or anything supported by [consolidate](https://github.com/visionmedia/consolidate.js).
* **data**: gather data from the user's environment to populate "hints" in user prompts or for rendering templates
* **fs**: in the spirit of [gulp](http://gulpjs.com), use `.src` and `.dest` to read and write globs of files.
* **vinyl**: files and templates are [vinyl](http://github.com/gulpjs/vinyl) files
* **streams**: full support for [gulp](http://gulpjs.com) and [assemble](https://github.com/assemble/assemble) plugins
* **smart plugins**: Update is built on [base](https://github.com/node-base/base), so any "smart" plugin from the Base ecosystem can be used
* **stores**: persist configuration settings, global defaults, project-specific defaults, answers to prompts, and so on.
* much more!

## CLI

### Installing update

**Install update**

To use Update's CLI, `update` must first be installed globally with [npm](https://www.npmjs.com/):

```sh
$ npm install --global update
```

This adds the `update` command to your system path, allowing it to be run from anywhere.

### Installing updaters

Updaters can be [found on npm](https://www.npmjs.com/browse/keyword/update-updater), but if you're not familiar with how Update works, we recommend installing  `updater-example`:

```sh
$ npm install --global updater-example
```

**Create "example.txt"**

In the current working directory, create an empty file named `example.txt`.

**Run**

As a habit, when using `update` make sure your work is committed, then run:

```sh
$ update example
```

This appends the string `foo` to the contents of `example.txt`. Visit the [updater-example](https://github.com/update/updater-example) project for additional steps and guidance.

## Tasks

Update ships with the following built-in [tasks](docs/tasks.md). These will be externalized to an updater or [generate](https://github.com/generate/generate) generator at some point.

### [init](lib/updatefile.js#L29)

Select the updaters to run every time `update` is run. Use `--add` to add additional updaters, and `--remove` to remove them. You can run this command whenever you want to update your preferences, like after installing new updaters.

**Example**

```sh
$ update init
```

### [list](lib/updatefile.js#L64)

Display a list of currently installed updaters.

**Example**

```sh
$ update defaults:list
# aliased as
$ update list
```

### [help](lib/updatefile.js#L85)

Display a help [menu](#help-menu) of available commands and flags.

**Example**

```sh
$ update defaults:help
# aliased as
$ update help
```

### [show](lib/updatefile.js#L101)

Show the list of updaters that are registered to run on the current project.

**Example**

```sh
$ update defaults:show
# aliased as
$ update show
```

### [help](lib/updatefile.js#L120)

Default task for the built-in `defaults` generator.

**Example**

```sh
$ update help
```

## Help menu

```console
$ update help

  Usage: update <command> [options]

  Command: updater or tasks to run

  Options:

    --config, -c      Save a configuration value to the `update` object in package.json
    --cwd             Set or display the current working directory
    --help, -h        Display this help menu
    --init, -i        Prompts you to choose the updaters to automatically run (your "queue")
    --add             Add updaters to your queue
    --remove          Remove updaters from your queue
    --run             Force tasks to run regardless of command line flags used
    --silent, -S      Silence all tasks and updaters in the terminal
    --show <key>      Display the value of <key>
    --version, -V     Display the current version of update
    --verbose, -v     Display all verbose logging messages

  Examples:

    # run updater "foo"
    $ update foo

    # run task "bar" from updater "foo"
    $ update foo:bar

    # run multiple tasks from updater "foo"
    $ update foo:bar,baz,qux

    # run a sub-generator from updater "foo"
    $ update foo.abc

    # run task "xyz" from sub-generator "foo.abc"
    $ update foo.abc:xyz

    Update attempts to automatically determine if "foo" is a task or updater.
    If there is a conflict, you can force update to run updater "foo"
    by specifying its default task. Example: `$ update foo:default`
```

## API

### Updaters

#### Discovering updaters

* Find updaters to install by [searching npm](https://www.npmjs.com/browse/keyword/update-updater) for packages with the keyword `updateupdater`
* Visit [Update's GitHub org](https://github.com/update) to see the updaters maintained by the core team

#### Discovering plugins

Plugins from any applications built on [base](https://github.com/node-base/base) should work with Update (and can be used in your updater):

* [base](https://www.npmjs.com/browse/keyword/baseplugin): find base plugins on npm using the `baseplugin` keyword
* [assemble](https://www.npmjs.com/browse/keyword/assembleplugin): find assemble plugins on npm using the `assembleplugin` keyword
* [generate](https://www.npmjs.com/browse/keyword/generateplugin): find generate plugins on npm using the `generateplugin` keyword
* [templates](https://www.npmjs.com/browse/keyword/templatesplugin): find templates plugins on npm using the `templatesplugin` keyword
* [update][update-plugin]: find update plugins on npm using the `updateplugin` keyword
* [verb](https://www.npmjs.com/browse/keyword/verbplugin): find verb plugins on npm using the `verbplugin` keyword

#### Authoring updaters

Visit the [updater documentation](docs/updaters.md) guide to learn how to use, author and publish updaters.

## Configuration

Customize settings and default behavior using the `update` property in package.json. These values will override global defaults.

```js
{
  "update": {
    "updaters": ["package", "license", "keywords"]
  }
}
```

### Options

The following options may be defined in package.json.

#### updaters

The updaters to run on the current project.

**Example**

Run `updater-license` and `updater-package` on the current project:

```js
{
  "update": {
    "updaters": ["package", "license"]
  }
}
```

## More information

* See the [updaters maintained by the core team](https://github.com/update)
* Browse the [documentation](docs)
* Browse the [API documentation](docs/api)
* Learn about [updaters](docs/updaters.md)
* Learn about the [built-in updaters](docs/cli/built-in-updaters.md)
* Learn more about [base](https://github.com/node-base/base)
* Get [Sublime Text Snippets](https://github.com/node-base/sublime-text-base-snippets) for creating tasks and updaters

## Release History

### key

Changelog entries are classified using the following labels from [keep-a-changelog](https://github.com/olivierlacan/keep-a-changelog):

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

### [0.7.3](https://github.com/update/update/compare/0.7.0...0.7.3) - 2016-07-21

**fixed**

* ensure `app.cwd` in the current instance is the cwd defined by the user on the options or argv.

### [0.7.0](https://github.com/update/update/compare/0.6.0...0.7.0) - 2016-07-21

**added**

* as of v0.7.0, we will begin using the [keep-a-changelog](https://github.com/olivierlacan/keep-a-changelog) format for release history
* adds support user-defined templates
* adds support for `app.home()`, which resolves to `~/` or the user-defined `options.homedir`. This directory is used to determine the base directory for user-defined templates.
* adds support for [common-config](https://github.com/jonschlinkert/common-config). Exposed on the `app.common` object (e.g. `app.common.set()` etc)
* adds experimental support for a `home` updater. If an `updatefile.js` exists in the `~/update` directory (this will be customizable, but it's not yet), this file will be loaded and `.use()`d as a plugin before other updaters are loaded. You can use this to set options, add defaults, etc. But you can also run it explictly via commandline with the `update home` command.

**fixed**

* fixes `app.cwd` so that it's updated when `app.options.dest` (`--dest`) is set
* ensure args are parsed consistently

### [0.6.0](https://github.com/update/update/compare/0.5.0...0.6.0)

* Swap out [base](https://github.com/node-base/base) for [assemble-core](https://github.com/assemble/assemble-core) (which uses Base via [templates](https://github.com/jonschlinkert/templates)). This allows updaters to seamlessly run generators from [generate](https://github.com/generate/generate), [assemble](https://github.com/assemble/assemble), or [verb](https://github.com/verbose/verb) (when a file needs to be created, or re-created for example)
* Adds [assemble-loader](https://github.com/assemble/assemble-loader) to support glob patterns in collection methods

### [0.5.0]

First stable release!

_(Changelog generated by [helper-changelog](https://github.com/helpers/helper-changelog))_

## About

### Related projects

* [assemble](https://www.npmjs.com/package/assemble): Get the rocks out of your socks! Assemble makes you fast at creating web projects… [more](https://github.com/assemble/assemble) | [homepage](https://github.com/assemble/assemble "Get the rocks out of your socks! Assemble makes you fast at creating web projects. Assemble is used by thousands of projects for rapid prototyping, creating themes, scaffolds, boilerplates, e-books, UI components, API documentation, blogs, building websit")
* [base](https://www.npmjs.com/package/base): base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting… [more](https://github.com/node-base/base) | [homepage](https://github.com/node-base/base "base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting with a handful of common methods, like `set`, `get`, `del` and `use`.")
* [generate](https://www.npmjs.com/package/generate): Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the robustness and configurability of Yeoman, the expressiveness and simplicity of Slush, and more powerful flow control and composability than either.")
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://github.com/verbose/verb) | [homepage](https://github.com/verbose/verb "Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.")

### Community

Are you using [Generate](https://github.com/generate/generate) in your project? Have you published a [generator](https://github.com/generate/generate/blob/master/docs/generators.md) and want to share your project with the world?

Here are some suggestions!

* If you get like Generate and want to tweet about it, please feel free to mention `@generatejs` or use the `#generatejs` hashtag
* Show your love by starring [Generate](https://github.com/generate/generate) and `update`
* Get implementation help on [StackOverflow](http://stackoverflow.com/questions/tagged/generate) (please use the `generatejs` tag in questions)
* **Gitter** Discuss Generate with us on [Gitter](https://gitter.im/generate/generate)
* If you publish an generator, thank you! To make your project as discoverable as possible, please add the keyword `generategenerator` to package.json.

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for avice on opening issues, pull requests, and coding standards.

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/update/update/blob/master/LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.1.30, on September 01, 2016._