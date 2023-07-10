import {
  HasProperty,
  isValuesAreEqual,
  isBothObjectHaveProperty,
  isObject,
  isWhichObject,
  //   isNotEqualVal,
} from '../src/predicates/predicates.js';
import * as data from './importForComparer.js';

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

test('isObject ', () => {
  expect(isObject(data.testOneFile1Nested.link)).toBeTruthy();
  expect(isObject('')).not.toBeTruthy();
  expect(isObject([])).not.toBeTruthy();
  expect(isObject(3)).not.toBeTruthy();
  expect(isObject(true)).not.toBeTruthy();
  expect(isObject(undefined)).not.toBeTruthy();
  expect(isObject(1.0)).not.toBeTruthy();
});

test('isWhichObject', () => {
  expect(isWhichObject({}, {})).toEqual('both');
  expect(isWhichObject('', {})).toEqual('file2');
  expect(isWhichObject({}, '')).toEqual('file1');
  expect(isWhichObject('', '')).toEqual('none');
});
