import { formatHandler } from '../src/parsers/formatHandler.js';
import * as data from './importForComparer.js';

test('Test1 filesComparer.', () => {
  const t = formatHandler('test_1_file1.json', 'test_1_file2.json');

  expect(t).toEqual(data.test1Json);
});
