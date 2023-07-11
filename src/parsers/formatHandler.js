import filesComparer from '../formatters/stylish/filesComparer.js';
import {
  getExtname,
  readTwoJsonFiles,
  SearchFile,
} from '../checkAndGetFiles/findFiles.js';
import { readTwoYMLFiles } from '../checkAndGetFiles/readYMlFile.js';
import plain from '../formatters/plain/plain.js';

export const executeDataFromFiles = (file1, file2, extension) => {
  let res;
  switch (extension) {
    case '.json':
      res = readTwoJsonFiles(file1, file2);
      break;
    case '.yml' || '.yaml':
      res = readTwoYMLFiles(file1, file2);
      break;
    default:
      break;
  }
  return res;
};

export const getNeedStyleOutput = (obj1, obj2, format) => {
  let res;
  switch (format) {
    case 'stylish':
      res = filesComparer(obj1, obj2);
      break;
    case 'plain':
      res = plain(obj1, obj2);
      break;
    default:
      break;
  }
  return res;
};

const isExtensionsAreEqual = (ext1, ext2) => {
  if (ext1 !== ext2) {
    throw new Error('Files has diffident extensions.');
  }
};

export const formatHandler = (file1, file2, format = 'stylish') => {
  const [extensionFile1, extensionFile2] = [
    getExtname(file1),
    getExtname(file2),
  ];
  isExtensionsAreEqual(extensionFile1, extensionFile2);
  const [file1Path, file2Path] = [SearchFile(file1), SearchFile(file2)];

  const [obj1, obj2] = executeDataFromFiles(
    file1Path,
    file2Path,
    extensionFile1,
  );

  return getNeedStyleOutput(obj1, obj2, format);
};
