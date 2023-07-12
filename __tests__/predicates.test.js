import fs from 'node:fs';

import {
  HasProperty,
  isValuesAreEqual,
  isBothObjectHaveProperty,
  isObject,
  isWhichObject,
} from '../src/predicates/predicates.js';
import * as data from './importForComparer.js';

const object1 = JSON.parse(fs.readFileSync('__tests__/__fixtures__/json_tests_data/test_1_file1.json'));
const object2 = JSON.parse(fs.readFileSync('__tests__/__fixtures__/json_tests_data/test_1_file2.json'));

test('HasProperty. Positive Test 1.', () => {
  expect(HasProperty(object1, 'host')).toBeTruthy();
});

test('isBothObjectHaveProperty. Positive Test 2.', () => {
  expect(isBothObjectHaveProperty(object1, object2, 'host')).toBeTruthy();
});

test('isValuesAreEqual. Positive  Test 3.', () => {
  expect(isValuesAreEqual(object1, object2, 'host')).toBeTruthy();
});

test('isObject Tests.', () => {
  expect(isObject(data.testOneFile1Nested.link)).toBeTruthy();
  expect(isObject('')).not.toBeTruthy();
  expect(isObject(3)).not.toBeTruthy();
  expect(isObject(true)).not.toBeTruthy();
  expect(isObject(undefined)).not.toBeTruthy();
  expect(isObject(1.0)).not.toBeTruthy();
});

test('isWhichObject.', () => {
  expect(isWhichObject({}, {})).toEqual('both');
  expect(isWhichObject('', {})).toEqual('file2');
  expect(isWhichObject({}, '')).toEqual('file1');
  expect(isWhichObject('', '')).toEqual('none');
});
