export default defineEventHandler(async (event) => {
  return await $fetch(`/shop`, {
    baseURL: import.meta.env.API_URL,
    method: 'GET',
    headers: event.headers,
  });
});
