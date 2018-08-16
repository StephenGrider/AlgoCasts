# is-ci

Returns `true` if the current environment is a Continuous Integration
server.

Please [open an issue](https://github.com/watson/is-ci/issues) if your
CI server isn't properly detected :)

[![npm](https://img.shields.io/npm/v/is-ci.svg)](https://www.npmjs.com/package/is-ci)
[![Build status](https://travis-ci.org/watson/is-ci.svg?branch=master)](https://travis-ci.org/watson/is-ci)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install is-ci --save
```

## Programmatic Usage

```js
const isCI = require('is-ci')

if (isCI) {
  console.log('The code is running on a CI server')
}
```

## CLI Usage

For CLI usage you need to have the `is-ci` executable in your `PATH`.
There's a few ways to do that:

- Either install the module globally using `npm install is-ci -g`
- Or add the module as a dependency to your app in which case it can be
  used inside your package.json scripts as is
- Or provide the full path to the executable, e.g.
  `./node_modules/.bin/is-ci`

```
is-ci && echo "This is a CI server"
```

## Supported CI tools

Officially supported CI servers:

- [AWS CodeBuild](https://aws.amazon.com/codebuild/)
- [AppVeyor](http://www.appveyor.com)
- [Bamboo](https://www.atlassian.com/software/bamboo) by Atlassian
- [Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines)
- [Buildkite](https://buildkite.com)
- [CircleCI](http://circleci.com)
- [Codeship](https://codeship.com)
- [Drone](https://drone.io)
- [GitLab CI](https://about.gitlab.com/gitlab-ci/)
- [GoCD](https://www.go.cd/)
- [Hudson](http://hudson-ci.org)
- [Jenkins CI](https://jenkins-ci.org)
- [Magnum CI](https://magnum-ci.com)
- [Semaphore](https://semaphoreci.com)
- [Solano CI](https://www.solanolabs.com/)
- [Strider CD](https://strider-cd.github.io/)
- [TaskCluster](http://docs.taskcluster.net)
- [Team Foundation Server](https://www.visualstudio.com/en-us/products/tfs-overview-vs.aspx) by Microsoft
- [TeamCity](https://www.jetbrains.com/teamcity/) by JetBrains
- [Travis CI](http://travis-ci.org)

Other CI tools using environment variables like `BUILD_ID` or `CI` would
be detected as well.

## License

[MIT](LICENSE)
