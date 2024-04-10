export default defineEventHandler(async (event) => {
  return await $fetch(`/auth/login`, {
    baseURL: import.meta.env.API_URL,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
});
