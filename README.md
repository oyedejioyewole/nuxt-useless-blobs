# Nuxt Useless Blobs

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

Just a simple integration for `useless-blobs` in Nuxt

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-useless-blobs?file=playground%2Fapp.vue)
- [📖 Documentation](https://github.com/jbukuts/useless-blobs/tree/main)

## Features

- <`UselessBlob` /> &mdash; this renders the blob

## Quick Setup

1. Add `nuxt-useless-blobs` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-useless-blobs

# Using yarn
yarn add --dev nuxt-useless-blobs

# Using npm
npm install --save-dev nuxt-useless-blobs
```

2. Add `nuxt-useless-blobs` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-useless-blobs"],
});
```

That's it! You can now use `nuxt-useless-blobs` in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-useless-blobs/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-useless-blobs
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-useless-blobs.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-useless-blobs
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
