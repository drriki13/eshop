export default defineNuxtRouteMiddleware((to, from) => {
    const auth = false;

    if (!auth) {
        return navigateTo('/login')
    }
})