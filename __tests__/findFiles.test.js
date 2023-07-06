import { isExistFile } from '../src/findFiles.js';

const data = {
  correct: {
    test1: '__tests__/json_tests_data/test_1_file1.json',
    test2: '__tests__/json_tests_data/test_1_file2.json',
    test3: '__tests__/answers/jsnon_test1_answer.json',
  },
  negative: {
    test1: '__tests__/json_tests_data/test_file1.json',
    test3: '__tests__/answers/jsnond_test1_answer.json',
  },
};

test('Positive tests. Check if file is exist func: isExistFile', () => {
  expect(isExistFile(data.correct.test1)).toBeTruthy();
  expect(isExistFile(data.correct.test2)).toBeTruthy();
  expect(isExistFile(data.correct.test3)).toBeTruthy();
});

test('Negative  tests. Check if file is exist func: isExistFile', () => {
  expect(isExistFile(data.negative.test1)).not.toBeTruthy();
  expect(isExistFile(data.negative.test3)).not.toBeTruthy();
});
