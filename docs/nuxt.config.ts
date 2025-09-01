export default defineNuxtConfig({
  extends: [import.meta.env.THEME_DIRECTORY ?? ['github:oyedejioyewole/nuxt-pastel-docs', { install: true }]],
  modules: ['../src/module'],
  devtools: { enabled: true },
  site: {
    url: 'https://nuxt-useless-blobs.vercel.app',
  },
  compatibilityDate: '2025-07-15',
})
