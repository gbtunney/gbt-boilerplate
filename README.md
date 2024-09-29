# @snailicide/build-config 🐌

[![NPM](https://img.shields.io/npm/v/@snailicide/build-config)](http://www.npmjs.com/package/@snailicide/build-config)
![License: MIT](https://img.shields.io/npm/l/@snailicide/build-config)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

_Provides repository with base configurations that can be extended in new packages._

---

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![RollupJS](https://img.shields.io/badge/RollupJS-ef3335?style=for-the-badge&logo=rollup.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)

### Repository

-   **Github:**
    [`@snailicide/build-config`](https://github.com/gbtunney/snailicide-monorepo/tree/main/packages/build-config) •
    [`snailicide-monorepo`](https://github.com/gbtunney/snailicide-monorepo.git)
-   **CDN**: [jsdeliver](https://cdn.jsdelivr.net/npm/@snailicide/build-config/dist/index.min.js)

### Author

👤 **Gillian Tunney**

-   [github](https://github.com/gbtunney)
-   [email](mailto:gbtunney@mac.com)

> Recommended package manager is [pnpm](http://pnpm.io)
>
> [![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)](http://pnpm.io)

## @snailicide/build-config 🐌

---

This package provides {blah,blah, blah,blah,blah} ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.

## Installation

```sh
#pnpm
$ pnpm add @snailicide/build-config -D

#yarn
$ yarn add @snailicide/build-config -D

#npm
$ npm install @snailicide/build-config --development
```

_**OR:**_

```shell
# install as sub-package
git clone git@github.com:gbtunney/gbt-boilerplate.git ./packages/gbt-boilerplate
rm -rf ./packages/gbt-boilerplate/.git
pnpm install

# run delete files script
pnpm exec --filter node ./workspace.mts < name > exec
```

## Examples

```ts
/* * HELLO WORLD * */

export type HelloWorld = string | number

const sampleFunc = (value: HelloWorld): HelloWorld => {
    console.log('sampleFunc:: ', value)
    return value
}
```

## Helpful Links

-   [Linting with Type Information | typescript-eslint](https://typescript-eslint.io/getting-started/typed-linting)
-   [How to quickly configure ESLint for import sorting | Medium](https://medium.com/@diballesteros/how-to-quickly-configure-eslint-for-import-sorting-3a4017bd4853)
