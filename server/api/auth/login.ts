export default defineEventHandler(async (event) => {
  const response = await $fetch('https://market.local/api/auth/login', {
    method: 'POST',
    body: {
      login: 'admin@example.com',
      password: 'qwerty123456',
      rememberMe: true,
    },
    mode: 'no-cors',
  });

  return response;
});
