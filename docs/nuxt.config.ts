// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-phosphor-icons',
    '../src/module',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: '%s · nuxt-useless-blobs',
      link: [
        { rel: 'icon', href: './favicon.svg' },
      ],
    },
  },
  colorMode: { classSuffix: '' },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            dark: 'github-dark',
            default: 'github-light',
          },
        },
      },
    },
  },
  compatibilityDate: '2025-07-15',
})
