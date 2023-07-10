import getKeys from '../src/filesComparer/getKeys.js';

test('getKeys ', () => {
  expect(getKeys({ proxy: '123.234.53.22' }, { follow: false })).toEqual([
    'proxy',
    'follow',
  ]);
  expect(getKeys({}, {})).toEqual([]);
  expect(getKeys({ proxy: '123.234.53.22' })).toEqual(['proxy']);
  expect(getKeys(null, { proxy: '123.234.53.22' })).toEqual(['proxy']);
});
