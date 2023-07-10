import { pushFormat } from '../src/filesComparer/pushFormat.js';

test('pushFormat ', () => {
  expect(pushFormat('item', null, 2, ' ', 'value')[0]).toEqual(
    '    item: value\n',
  );
  expect(pushFormat('item', null, 2, ' ', 'value', 'value')[0]).toEqual(
    '    item: value\n',
  );
  expect(pushFormat('item', null, 2, '+-', 'value', 'not value')).toEqual([
    '  + item: value\n',
    '  - item: not value\n',
  ]);
});
