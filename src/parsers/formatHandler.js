import stylish from '../formatters/stylish/stylish.js';
import { getExtname, readTwoJsonFiles, SearchFile } from '../checkAndGetFiles/findFiles.js';
import { readTwoYMLFiles } from '../checkAndGetFiles/readYMlFile.js';
import plain from '../formatters/plain/plain.js';

export const executeDataFromFiles = (file1, file2, extension) => {
  switch (extension) {
    case '.json':
      return readTwoJsonFiles(file1, file2);
    case '.yml' || '.yaml':
      return readTwoYMLFiles(file1, file2);
    default:
      throw new Error('Files has diffident extensions.');
  }
};

export const getNeedStyleOutput = (obj1, obj2, format) => {
  switch (format) {
    case 'stylish':
      return stylish(obj1, obj2);
    case 'plain':
      return plain(obj1, obj2);
    default:
      return JSON.stringify(obj2, undefined, 4);
  }
};

const isExtensionsAreEqual = (ext1, ext2) => {
  if (ext1 !== ext2) {
    throw new Error('Files has diffident extensions.');
  }
};

export const formatHandler = (file1, file2, format = 'stylish') => {
  const [extensionFile1, extensionFile2] = [getExtname(file1), getExtname(file2)];
  isExtensionsAreEqual(extensionFile1, extensionFile2);
  const [file1Path, file2Path] = [SearchFile(file1), SearchFile(file2)];

  const [obj1, obj2] = executeDataFromFiles(file1Path, file2Path, extensionFile1);

  return getNeedStyleOutput(obj1, obj2, format);
};
