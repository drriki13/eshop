import { fetchWithCookie } from '~/composables/fetch';

export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  return await fetchWithCookie(event, `/auth/login`, {
    baseURL: import.meta.env.API_URL,
    method: 'POST',
    body: data,
    credentials: 'include',
  });
});
