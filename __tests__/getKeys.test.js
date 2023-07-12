import getKeys from '../src/utils/getKeys.js';

test('getKeys', () => {
  expect(getKeys({ proxy: '123.234.53.22' }, { follow: false })).toEqual(['follow', 'proxy']);
  expect(getKeys({}, {})).toEqual([]);
  expect(getKeys({ proxy: '123.234.53.22' })).toEqual(['proxy']);
  expect(getKeys(null, { proxy: '123.234.53.22' })).toEqual(['proxy']);
});
