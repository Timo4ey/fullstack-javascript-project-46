import {
  isExistFile,
  readJsonFile,
  readTextFile,
  openJsonFile,
  openTextFile,
} from '../src/checkAndGetFiles/findFiles.js';

import * as data from './testDataJson.json';

// const data = JSON.parse('./findFiles.test.js');

test('isExistFile. Positive tests. Check if file is exist func: isExistFile', () => {
  expect(isExistFile(data.correct.test1)).toBeTruthy();
  expect(isExistFile(data.correct.test2)).toBeTruthy();
  expect(isExistFile(data.correct.test3)).toBeTruthy();
});

test('Negative  tests. Check if file is exist func: isExistFile', () => {
  expect(isExistFile(data.negative.test1)).not.toBeTruthy();
  expect(isExistFile(data.negative.test2)).not.toBeTruthy();
});

test('readJsonFile. Positive', () => {
  expect(typeof readJsonFile(data.correct.test1)).toEqual('object');
  expect(readJsonFile(data.correct.test1)).toHaveProperty(
    'host',
    'timeout',
    'proxy',
    'follow',
  );
  expect(readJsonFile(data.correct.test1).host).toEqual('hexlet.io');
});

test('openJsonFile. Positive', () => {
  expect(typeof openJsonFile(data.correct.test1)).toEqual('object');
  expect(openJsonFile(data.correct.test1)).toHaveProperty(
    'host',
    'timeout',
    'proxy',
    'follow',
  );
  expect(openJsonFile(data.correct.test1).host).toEqual('hexlet.io');
});

test('openJsonFile. Negative', () => {
  expect(() => {
    openJsonFile(data.negative.test1);
  }).toThrow(new Error("File hast'n been found."));
});

test('readTextFile. Positive', () => {
  expect(
    readTextFile('__tests__/answers/test1_json.txt').includes(
      '  - follow: false',
    ),
  ).toBeTruthy();
});

test('openTextFile. Negative', () => {
  expect(() => {
    openTextFile(data.negative.test1);
  }).toThrow(new Error("File hast'n been found."));
});
