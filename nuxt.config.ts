import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@vue-final-modal/nuxt',
  ],

  app: {
    head: {
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  css: ['~/assets/css/tailwind.css'],

  icon: {
    clientBundle: { scan: true },
  },

  image: {
    dir: 'assets/images',
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
