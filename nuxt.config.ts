import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    'nuxt-og-image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  devtools: {
    enabled: true,
  },
  css: [
    '~/assets/css/main.css',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  fonts: {
    defaults: {
      weights: [
        400,
        800,
      ],
    },
    families: [
      {
        name: 'Inter',
        provider: 'google',
        global: true,
      },
    ],
  },
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      title: "Sckab's Portfolio",
    },
  },
  site: {
    url: 'https://sckab.is-a.dev',
    name: "Sckab's Portfolio",
  },
})