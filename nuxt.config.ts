// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', "pruvious"],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      }
    }
  },

  pruvious: {
    jwt: {
      secretKey: "J69u5jpcyYF35Hc_Nbkv-FneCGvut1uRh77hbAtC8kr5_j3a8wsQ-ucV_d7Jv3lD"
    }
  }
})