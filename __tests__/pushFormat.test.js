import { pushFormat, pushFormatPure } from '../src/filesComparer/pushFormat.js';

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

// test('pushFormatPure ', () => {
//   const t = pushFormatPure({
//     nginx: {
//       port: 80,
//     },
//   });

//   expect(t).toEqual('   nginx: {\n          port: 80\n    }\n');
// });
