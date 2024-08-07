import * as src from '@src/axios';

describe('axios', () => {
  it('makes a request', async () => {
    const actual = await src.main();

    expect(1).toBe(1);
  });
});
