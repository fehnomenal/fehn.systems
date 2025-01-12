// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vue-final-modal/nuxt',
  ],

  icon: {
    clientBundle: { scan: true },
  },

  image: {
    dir: 'assets/images',
  },

  tailwindcss: {
    exposeConfig: true,
  },
})
