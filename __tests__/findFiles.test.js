import fs from 'node:fs';
import {
  isExistFile,
  readJsonFile,
  readTextFile,
  openJsonFile,
  openTextFile,
  SearchFile,
  getExtname,
} from '../src/checkAndGetFiles/findFiles.js';

const data = JSON.parse(fs.readFileSync('__tests__/__fixtures__/testDataJson.json'));

test('isExistFile. Positive tests. Check if file is exist func: isExistFile', () => {
  expect(isExistFile(data.correct.test1)).toBeTruthy();
  expect(isExistFile(data.correct.test2)).toBeTruthy();
  expect(isExistFile(data.correct.test3)).toBeTruthy();
});

test('Negative  tests. Check if file is exist func: isExistFile', () => {
  const t = isExistFile(data.negative.test1);
  expect(t).not.toBeTruthy();
  expect(isExistFile(data.negative.test2)).not.toBeTruthy();
});

test('readJsonFile. Positive', () => {
  expect(typeof readJsonFile(data.correct.test1)).toEqual('object');
  expect(readJsonFile(data.correct.test1)).toHaveProperty('host', 'timeout', 'proxy', 'follow');
  expect(readJsonFile(data.correct.test1).host).toEqual('hexlet.io');
});

test('openJsonFile. Positive', () => {
  expect(typeof openJsonFile(data.correct.test1)).toEqual('object');
  expect(openJsonFile(data.correct.test1)).toHaveProperty('host', 'timeout', 'proxy', 'follow');
  expect(openJsonFile(data.correct.test1).host).toEqual('hexlet.io');
});

test('openJsonFile. Negative', () => {
  expect(() => {
    openJsonFile(data.negative.test1);
  }).toThrow(new Error("File hast'n been found."));
});

test('readTextFile. Positive', () => {
  expect(readTextFile('__tests__/__fixtures__/answers/test1_json.txt').includes('  - follow: false')).toBeTruthy();
});

test('openTextFile. Negative', () => {
  expect(() => {
    openTextFile(data.negative.test1);
  }).toThrow(new Error("File hast'n been found."));
});

test('SearchFile. Positive', () => {
  const res = SearchFile('./__tests__/__fixtures__/json_tests_data/test_1_file1_NESTED.json');
  const res2 = SearchFile('test_1_file1_NESTED.json');
  const res3 = SearchFile('.codeclimate.yml');
  expect(res).toEqual('./__tests__/__fixtures__/json_tests_data/test_1_file1_NESTED.json');
  expect(res2).toEqual('__tests__/__fixtures__/json_tests_data/test_1_file1_NESTED.json');
  expect(res3).toEqual('.codeclimate.yml');
});

test('. Positive', () => {
  const res = getExtname('./__tests__/__fixtures__/json_tests_data/test_1_file1_NESTED.json');
  const res2 = getExtname('test_1_file1_NESTED.json');
  const res3 = getExtname('.codeclimate.yml');
  expect(res).toEqual('.json');
  expect(res2).toEqual('.json');
  expect(res3).toEqual('.yml');
});
