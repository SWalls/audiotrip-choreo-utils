# Node package

[![version](https://img.shields.io/npm/v/@swalls/node-package-template.svg)](https://www.npmjs.com/package/@swalls/node-package-template)
[![build status](https://travis-ci.org/SWalls/node-package-template.svg?branch=master)](https://travis-ci.org/SWalls/node-package-template)
[![coverage status](https://coveralls.io/repos/github/SWalls/node-package-template/badge.svg?branch=master)](https://coveralls.io/github/SWalls/node-package-template?branch=master)
[![dependency status](https://david-dm.org/SWalls/node-package-template.svg)](https://david-dm.org/SWalls/node-package-template)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@swalls/node-package-template.svg)](https://www.npmjs.com/package/@swalls/node-package-template)
[![downloads](https://img.shields.io/npm/dt/@swalls/node-package-template.svg)](https://www.npmjs.com/package/@swalls/node-package-template)
[![GitHub Action: Push](https://github.com/SWalls/node-package-template/actions/workflows/push.yml/badge.svg)](https://github.com/SWalls/node-package-template/actions/workflows/push.yml)

Description 

## Install

### Use npm or yarn

- `npm install @swalls/node-package-template` or
- `yarn add @swalls/node-package-template`

### From sources

Clone repository with Git:

```sh
$ git clone https://github.com/SWalls/node-package-template.git
$ cd node-package-template
```

Or download repository with ZIP:

```sh
$ curl -LO https://github.com/SWalls/node-package-template/archive/master.zip
$ unzip master.zip
$ rm master.zip
$ cd node-package-template
```

Reinitialize Git repository:

```sh
$ rm -rf .git
$ git init
```

Install package dependencies:

```sh
$ npm install
```

## Use

```typescript
import packageName from '@swalls/node-package-template';

packageName();
```


## Test

Run tests:

```sh
$ npm test
```

Run tests in watch mode:

```sh
$ npm run test:watch
```

Run tests with coverage:

```sh
$ npm run test:coverage
```

View coverage in browser:

```sh
$ npm run test:coverage
$ open coverage/index.html
```

Lint files:

```sh
$ npm run lint
```

Fix lint errors:

```sh
$ npm run lint:fix
```

## Contribute

- `yarn set version latest`
- `yarn up "*" "@*/*"`
- If you use VIM, run `yarn sdks vim`.
- If you use Visual Studio Code, run `yarn sdks vscode`.

## License

[MIT](https://github.com/SWalls/node-package-template/blob/master/LICENSE)

*Template created by combining:*

- https://github.com/CharlesStover/node-package-template
- https://github.com/remarkablemark/npm-package-template