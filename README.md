# Nuxt Useless Blobs

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

Just a simple integration for `useless-blobs` in Nuxt

- [✨ Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/edit/nuxt-useless-blobs?file=playground%2Fapp.vue)
- [📖 Documentation](https://github.com/jbukuts/useless-blobs/tree/main)

## Features

- A <`UselessBlob` /> component &mdash; this renders the blob

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

## Usage

This module exposes a `<UselessBlob />` component that you can use in your Nuxt app.

```vue
<template>
  <!-- This uses the default values -->
  <UselessBlob />
</template>
```

**Note:** This also accepts props, for more information refer to the component types or [here](https://github.com/jbukuts/useless-blobs/tree/main)

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm dev:prepare

# Develop with the playground
pnpm dev

# Build the playground
pnpm dev:build

# Run ESLint
pnpm lint

# Release new version
pnpm release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-useless-blobs/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-useless-blobs
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-useless-blobs.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-useless-blobs
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
