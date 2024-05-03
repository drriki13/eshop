import { ref } from 'vue';

export default defineEventHandler(async (event) => {
  const headers = ref();
  return {
    fetch: await $fetch(`/shop`, {
      baseURL: import.meta.env.API_URL,
      method: 'GET',
      headers: event.headers,
      onResponse(context): Promise<void> | void {
        headers.value = context.response.headers;
        console.log(context.response.headers);
      },
    }),
    headers: headers,
  };
});
