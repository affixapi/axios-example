import { CookieJar } from 'tough-cookie';

import {
  makeXhrRequest,
  makeXhrRequestWithProxy,
  defaultHeaders,
} from '@src/utils';

export const main = async () => {
  const jar = new CookieJar();

  const url =
    'https://example.org' ||
    'https://g2.com' ||
    'https://reddit.com' ||
    'https://google.com';

  const responseRaw0 = await makeXhrRequest({
    headers: {
      ...defaultHeaders,
    },
    jar,
    url,
  });
  const { data: response, headers } = responseRaw0;

  //  with proxy ->
  // const responseRaw = await makeXhrRequestWithProxy({
  // headers: {
  // ...defaultHeaders,
  // },
  // jar,
  // url,
  // });
  // const { data: response, headers } = responseRaw;

  console.log({ headers, response });

  console.log({ jar });
};
