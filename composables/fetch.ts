import { appendResponseHeader, H3Event } from 'h3';
import type { NitroFetchOptions } from 'nitropack';

export const fetchWithCookie = async (
  event: H3Event,
  url: string,
  opts: NitroFetchOptions<string>,
) => {
  /* Get the response from the server endpoint */
  const res = await $fetch.raw(url, opts);
  /* Get the cookies from the response */
  const cookies = (res.headers.get('set-cookie') || '').split(',');
  /* Attach each cookie to our incoming Request */
  for (const cookie of cookies) {
    appendResponseHeader(event, 'set-cookie', cookie);
  }
  /* Return the data of the response */
  return res._data;
};
