import { openTextFile, readJsonFile } from '../src/checkAndGetFiles/findFiles.js';

export const testOneFile1 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_1_file1.json');
export const testOneFile2 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_1_file2.json');

export const testTwoFile1 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_2_file1.json');
export const testTwoFile2 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_2_file2.json');

export const testThreeFile1 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_3_positive.json');
export const testThreeFile2 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_3_positive2.json');

export const testFourFile1 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_4_empty_file1.json');
export const testFourFile2 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_4_file2.json');

export const testOneFile1Nested = readJsonFile('__tests__/__fixtures__/json_tests_data/test_1_file1_NESTED.json');
export const testOneFile2Nested = readJsonFile('__tests__/__fixtures__/json_tests_data/test_1_file2_NESTED.json');

export const testOneFile1Nested1 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_1_file1_NESTED1.json');
export const testOneFile2Nested2 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_1_file2_NESTED2.json');

export const testOneFile1BigNested5 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_5_recurs_file1.json');
export const testOneFile2BigNested5 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_5_recurs_file2.json');

export const testOneFile1BigNested6 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_6_plain_file1.json');
export const testOneFile2BigNested6 = readJsonFile('__tests__/__fixtures__/json_tests_data/test_6_plain_file2.json');

export const testOneFile1RecursShort = readJsonFile('__tests__/__fixtures__/json_tests_data/test_5_recurs_file01.json');
export const testOneFile2RecursShort = readJsonFile('__tests__/__fixtures__/json_tests_data/test_5_recurs_file02.json');

export const testOneFile1Fix = readJsonFile('__tests__/__fixtures__/realTests/file1.json');
export const testOneFile1F2x = readJsonFile('__tests__/__fixtures__/realTests/file2.json');

export const test1Json = openTextFile('__tests__/__fixtures__/answers/test1_json.txt');
export const test2Json = openTextFile('__tests__/__fixtures__/answers/test2_json.txt');
export const test3Json = openTextFile('__tests__/__fixtures__/answers/test3_positive_file5.txt');
export const test4Json = openTextFile('__tests__/__fixtures__/answers/test4_empty_full.txt');
export const test1JsonNested = openTextFile('__tests__/__fixtures__/answers/test_1_NESTED_json.txt');
export const test1JsonNested2 = openTextFile('__tests__/__fixtures__/answers/test_1_NESTED_json2.txt');

export const test1JsonBigNested = openTextFile('__tests__/__fixtures__/answers/test_5_recurs');

export const test1JsonRecursShort = openTextFile('__tests__/__fixtures__/answers/test_5_recurs2');
export const test1JsonFix = openTextFile('__tests__/__fixtures__/realTests/result_stylish');

export const test1JsonPlain = openTextFile('__tests__/__fixtures__/realTests/result_plain');
export const test1Plain = openTextFile('__tests__/__fixtures__/answers/test1_plain');
