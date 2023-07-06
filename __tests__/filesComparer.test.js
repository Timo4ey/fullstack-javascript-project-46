import {
  openTextFile,
  readJsonFile,
} from '../src/checkAndGetFiles/findFiles.js';
import filesComparer from '../src/filesComparer/filesComparer.js';

const testOneFile1 = readJsonFile(
  '__tests__/json_tests_data/test_1_file1.json',
);
const testOneFile2 = readJsonFile(
  '__tests__/json_tests_data/test_1_file2.json',
);

const test1Json = openTextFile('__tests__/answers/test1_json.txt');

test('Test filesComparer', () => {
  const t = filesComparer(testOneFile1, testOneFile2);

  expect(t).toEqual(test1Json);
});
