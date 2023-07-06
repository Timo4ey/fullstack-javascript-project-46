import {
  HasProperty,
  isValuesAreEqual,
  isBothObjectHaveProperty,
//   isNotEqualVal,
} from '../src/predicates/predicates.js';

import * as object1 from './json_tests_data/test_1_file1.json';
import * as object2 from './json_tests_data/test_1_file2.json';

test('HasProperty. Positive ', () => {
  expect(HasProperty(object1, 'host')).toBeTruthy();
});

test('isBothObjectHaveProperty. Positive ', () => {
  expect(isBothObjectHaveProperty(object1, object2, 'host')).toBeTruthy();
});

test('isValuesAreEqual. Positive ', () => {
  expect(isValuesAreEqual(object1, object2, 'host')).toBeTruthy();
});

// test('isNotEqualVal. Positive ', () => {
//   expect(isNotEqualVal(object1, object2, 'timeout')).toBeTruthy();
// });
