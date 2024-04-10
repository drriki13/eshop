// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/eshop/',
  },
  devtools: { enabled: true },
  modules: ['nuxt-primevue', '@vee-validate/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icons'],
  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: false,
      ripple: true,
    },
    cssLayerOrder: 'tailwind-base,primevue,tailwind-utilities',
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  css: [
    'assets/fonts/TildaSans/TildaSans-Regular/TildaSans-Regular.css',
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeicons/primeicons.css',
    'assets/css/them.css',
  ],
});
