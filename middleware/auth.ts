export default defineNuxtRouteMiddleware((to, from) => {
  const auth = true;

  if (!auth) {
    return navigateTo('/login');
  }
});
