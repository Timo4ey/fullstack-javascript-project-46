import * as fs from 'node:fs';
import * as path from 'node:path';

const isExistFile = (pathToFile) => fs.existsSync(pathToFile);

const SearchFile = (pathToFile) => {
  const __dirname = path.dirname(pathToFile);
  const curDir = path.join('./', path.dirname(__dirname), pathToFile);
  const upperDir = path.join('../', path.dirname(__dirname), pathToFile);
  const testDir = path.join('./', '__tests__', '__fixtures__', 'json_tests_data', pathToFile);
  if (!isExistFile(pathToFile)) {
    if (isExistFile(curDir)) {
      return curDir;
    }
    if (isExistFile(upperDir)) {
      return upperDir;
    }
    if (isExistFile(testDir)) {
      return testDir;
    }
    throw new Error("File hast'n been found.");
  }
  return pathToFile;
};

const readJsonFile = (pathToFile) => JSON.parse(fs.readFileSync(pathToFile));

export const readTwoJsonFiles = (pathToFile1, pathToFile2) => [
  JSON.parse(fs.readFileSync(pathToFile1)),
  JSON.parse(fs.readFileSync(pathToFile2)),
];

const openJsonFile = (pathToFile) => {
  if (!isExistFile(pathToFile)) {
    throw new Error("File hast'n been found.");
  }
  return readJsonFile(pathToFile);
};
const readTextFile = (pathToFile) => fs.readFileSync(pathToFile, 'utf-8');

const openTextFile = (pathToFile) => {
  if (!isExistFile(pathToFile)) {
    throw new Error("File hast'n been found.");
  }
  return readTextFile(pathToFile);
};

const getExtname = (pathToFile) => path.extname(pathToFile);

export {
  isExistFile, readJsonFile, openJsonFile, readTextFile, openTextFile, SearchFile, getExtname,
};
