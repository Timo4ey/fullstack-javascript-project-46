import plain from '../src/formatters/plain/plain.js';
import * as data from './importForComparer.js';

test('plain Test 1.', () => {
  const t = plain(data.testOneFile1Fix, data.testOneFile1F2x);

  expect(t).toEqual(data.test1JsonPlain);
});

test('plain Test 2.', () => {
  const t = plain(data.testOneFile1, data.testOneFile2);

  expect(t).toEqual(data.test1Plain);
});
