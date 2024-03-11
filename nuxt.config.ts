// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: { enabled: true },
  modules: ['nuxt-primevue', '@nuxtjs/tailwindcss'],
  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: false,
      ripple: true,
    },
    cssLayerOrder: 'tailwind-base,primevue,tailwind-utilities',
  },
  css: ['assets/fonts/TildaSans/TildaSans-Regular/TildaSans-Regular.css','primevue/resources/themes/aura-light-green/theme.css', 'primeicons/primeicons.css'],
});
