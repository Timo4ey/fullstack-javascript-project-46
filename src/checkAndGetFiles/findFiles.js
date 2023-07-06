import * as fs from 'node:fs';

const isExistFile = (path) => fs.existsSync(path);

const readJsonFile = (path) => JSON.parse(fs.readFileSync(path));

const openJsonFile = (path) => {
  if (!isExistFile(path)) {
    throw new Error("File hast'n been found.");
  }
  return readJsonFile(path);
};
const readTextFile = (path) => fs.readFileSync(path, 'utf-8');

const openTextFile = (path) => {
  if (!isExistFile(path)) {
    throw new Error("File hast'n been found.");
  }
  return readTextFile(path);
};

export {
  isExistFile, readJsonFile, openJsonFile, readTextFile, openTextFile,
};
