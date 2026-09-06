import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
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
  icon: {
    clientBundle: {
      scan: true,
      icons: [
        // scan doesn't catch dynamically created icons
        'devicon:cplusplus',
        'devicon:python',
        'devicon:lua',
        'devicon:html5',
        'devicon:css',
        'devicon:javascript',
        'devicon:typescript',
        'devicon:tailwindcss',
        'devicon:astro',
        'devicon:nextjs',
        'devicon:react',
        'devicon:nuxt',
        'devicon:vuejs',
        'devicon:nodejs',
        'devicon:uv',
        'devicon:cmake',
        'devicon:git',
        'devicon:gitlab',
        'devicon:github',
        'devicon:githubactions',
        'devicon:bash',
        'devicon:markdown',
        'devicon:archlinux',
        'devicon:neovim',
      ],
    },
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
