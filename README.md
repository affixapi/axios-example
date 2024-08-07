# axios-example

[![release](https://github.com/affixapi/axios-example/actions/workflows/release.yml/badge.svg)](https://github.com/affixapi/axios-example/actions/workflows/release.yml)

### instructions

```
npm i

npm run exec -- src/index.ts
```

# or

```
npm test -- test/axios.test.ts --watch
```

### proxy

since repo is public, for proxy url, load creds in `PROXY_CREDS` env var

```bash
export PROXY_CREDS="user:pass" npm run exec -- src/index.ts
```

```bash
export PROXY_CREDS="user:pass" npm test -- test/axios.test.ts --watch
```
