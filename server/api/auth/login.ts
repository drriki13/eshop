import { FetchContext, FetchResponse } from 'ofetch';

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const response = await $fetch(`/auth/login`, {
    baseURL: import.meta.env.API_URL,
    method: 'POST',
    body: data,
    credentials: 'include',
    onResponse(context: FetchContext & { response: FetchResponse<{}> }): Promise<void> | void {
      // const cookies = parseCookies(context);

      // console.dir(context.response.headers.getSetCookie());
      context.response.headers.getSetCookie().forEach((item) => {
        console.log(item);
      });
      console.log(context.response.headers.getSetCookie());

      // setCookie(event, 'authKey', '123test');
    },
  });

  return response;
});
