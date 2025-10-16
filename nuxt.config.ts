// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Rigelis Inc',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Rigelis — OS for pharmacies' }
      ]
    }
  },
  css: ['/assets/styles.css'],
})