// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        autoRewrite:true,
      },
    },
  },
  modules: ['vuetify-nuxt-module'],
  vuetify :{
    moduleOptions:{

    },
    vuetifyOptions :{
    }
  }
})