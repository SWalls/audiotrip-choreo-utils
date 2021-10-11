# audiotrip-choreo-utils

[![version](https://img.shields.io/npm/v/@swalls/audiotrip-choreo-utils.svg)](https://www.npmjs.com/package/@swalls/audiotrip-choreo-utils)
[![build status](https://app.travis-ci.com/SWalls/audiotrip-choreo-utils.svg?branch=main)](https://app.travis-ci.com/SWalls/audiotrip-choreo-utils)
[![coverage status](https://coveralls.io/repos/github/SWalls/audiotrip-choreo-utils/badge.svg?branch=master)](https://coveralls.io/github/SWalls/audiotrip-choreo-utils?branch=master)
[![dependency status](https://flat.badgen.net/dependabot/SWalls/audiotrip-choreo-utils?icon=dependabot)](https://flat.badgen.net/dependabot/SWalls/audiotrip-choreo-utils?icon=dependabot)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@swalls/audiotrip-choreo-utils.svg)](https://www.npmjs.com/package/@swalls/audiotrip-choreo-utils)
[![downloads](https://img.shields.io/npm/dt/@swalls/audiotrip-choreo-utils.svg)](https://www.npmjs.com/package/@swalls/audiotrip-choreo-utils)
[![GitHub Action: Push](https://github.com/SWalls/audiotrip-choreo-utils/actions/workflows/push.yml/badge.svg)](https://github.com/SWalls/audiotrip-choreo-utils/actions/workflows/push.yml)

Useful functions for easily reading, parsing, and manipulating .ats choreography files for AudioTrip VR.

## Install

### Use npm or yarn

- `npm install @swalls/audiotrip-choreo-utils` or
- `yarn add @swalls/audiotrip-choreo-utils`

### From sources

Clone repository with Git:

```sh
$ git clone https://github.com/SWalls/audiotrip-choreo-utils.git
$ cd audiotrip-choreo-utils
```

Or download repository with ZIP:

```sh
$ curl -LO https://github.com/SWalls/audiotrip-choreo-utils/archive/master.zip
$ unzip master.zip
$ rm master.zip
$ cd audiotrip-choreo-utils
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
import * as ChoreoUtils from '@swalls/audiotrip-choreo-utils';

const choreo = ChoreoUtils.readAtsFile('/path/to/choreo.ats');
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

### Special Thanks

- [@hn3000/ats-types](https://github.com/hn3000/ats-types)
- 🕺Audio Trip Custom Choreography: https://www.atcd.club/
  - 💾⬇️ Download choreos here:
https://discord.gg/3vZP5YK
- 🎧 Audio Trip:
http://www.kinemotik.com/audiotrip/

## Support

This free open-source software was made with :heart: by a real person - me! If you found this tool useful, please consider tipping any amount you feel is appropriate for the value you received. :)

- Give the dev a :moneybag: tip here: [solarbabies.tips](https://solarbabies.tips)

## License

[MIT](https://github.com/SWalls/audiotrip-choreo-utils/blob/master/LICENSE)
