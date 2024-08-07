import axios from 'axios';
import { CookieJar } from 'tough-cookie';
import { wrapper } from 'axios-cookiejar-support';
import userAgents from 'user-agents';
import { createCookieAgent } from 'http-cookie-agent/http';
import { HttpProxyAgent } from 'http-proxy-agent';
import { HttpsProxyAgent } from 'https-proxy-agent';
import type { AxiosResponse } from 'axios';

wrapper(axios);

const HttpProxyCookieAgent = createCookieAgent(HttpProxyAgent);
const HttpsProxyCookieAgent = createCookieAgent(HttpsProxyAgent);

export type ResponseTypes =
  | string
  | undefined
  | Record<string, unknown>
  | Record<string, unknown>[];

const proxyUrl = 'https://[[[proxy-url-here]]]@pr.oxylabs.io:7777';

const proxyConfig = (jar: CookieJar) => ({
  httpAgent: new HttpProxyCookieAgent(proxyUrl, {
    cookies: { jar },
  } as any), // eslint-disable-line @typescript-eslint/no-explicit-any
  httpsAgent: new HttpsProxyCookieAgent(proxyUrl, {
    cookies: { jar },
  } as any), // eslint-disable-line @typescript-eslint/no-explicit-any
});

export const userAgent = {
  'User-Agent': new userAgents({ deviceCategory: 'desktop' }).toString(),
};
export const defaultHeaders = {
  ...userAgent,
  Accept: '*/*',
  'Accept-Encoding': 'identity',
  'Accept-Language': 'en-GB,en;q=0.9',
} as const;

export const makeXhrRequestWithProxy = <T extends ResponseTypes>({
  jar,
  url,
  headers = defaultHeaders,
}: {
  headers?: Record<string, string>;
  jar: CookieJar;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): Promise<AxiosResponse<T, any>> =>
  axios.request<T>({
    ...proxyConfig(jar),
    headers,
    method: 'GET',
    url,
  });

export const makeXhrRequest = <T extends ResponseTypes>({
  jar,
  url,
  headers = defaultHeaders,
}: {
  headers?: Record<string, string>;
  jar: CookieJar;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): Promise<AxiosResponse<T, any>> =>
  axios.request<T>({
    headers,
    jar,
    method: 'GET',
    url,
  });
