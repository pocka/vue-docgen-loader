# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.1] - 2024-10-29

### Fixed

- Upgrade to [the latest version](https://github.com/facebook/jscodeshift/releases/tag/v17.0.0) of `jscodeshift` package, which updates/removes vulnerable package versions ([661a26b](https://github.com/pocka/vue-docgen-loader/commit/661a26b98f745e839056044ec1f22ab53259c32e)).

## [2.0.0] - 2022-07-02

### Changed

- **BREAKING**: Bump the minimum supported Node.js version to 12 ([f669d1c](https://github.com/pocka/vue-docgen-loader/commit/f669d1c8bd539ad31c7e8522b3ac9e3b516c04eb)).

### Fixed

- Remove a deprecated `querystring` package from `dependencies` (PR: [#16](https://github.com/pocka/vue-docgen-loader/pull/16)).

## [1.5.1] - 2022-04-10

### Fixed

- Upgrade to [the latest version](https://github.com/facebook/jscodeshift/releases/tag/0.13.1) of `jscodeshift` package, which includes mitigation for a security vulnerability in `colors` package (PR: [#15](https://github.com/pocka/vue-docgen-loader/pull/15)).

## [1.5.0] - 2020-02-22

### Added

- Support `@ignore` JSDoc tag for slots (PR: [#12](https://github.com/pocka/vue-docgen-loader/pull/12)).

## [1.4.0] - 2020-02-12

### Added

- Support `@ignore` JSDoc tag for props and events (PR: [#10](https://github.com/pocka/vue-docgen-loader/pull/10)).

## [1.3.0] - 2019-12-19

### Added

- Add `injectAt` option.

### Fixed

- Fix inconsistent injection. (PR: [#8](https://github.com/pocka/vue-docgen-loader/pull/8))
- Fix incorrect injection for default-exported component. (PR: [#8](https://github.com/pocka/vue-docgen-loader/pull/8))

## [1.2.0] - 2019-12-06

### Added

- Add support for parsing multiple exports. (PR: [#4](https://github.com/pocka/vue-docgen-loader/pull/4))

### Fixed

- Fix peer dependency's unnecessarily strict version. (PR: [#4](https://github.com/pocka/vue-docgen-loader/pull/4))

## [1.1.1] - 2019-11-22

### Fixed

- Fix typo in peer dependency. (PR: [#3](https://github.com/pocka/vue-docgen-loader/pull/3))

## [1.1.0] - 2019-11-15

### Added

- Add non-SFC support. (PR: [#2](https://github.com/pocka/vue-docgen-loader/pull/2))
- Support vue-docgen-api@4. (PR: [#2](https://github.com/pocka/vue-docgen-loader/pull/2))

## [1.0.1] - 2019-11-14

### Fixed

- Fix the loader name in an error message.

## [1.0.0] - 2019-11-14

### Added

- The loader (initial release).
