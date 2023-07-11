import filesComparer from '../filesComparer/filesComparer.js';
import {
  getExtname,
  readJsonFile,
  SearchFile,
} from '../checkAndGetFiles/findFiles.js';

// eslint-disable-next-line import/prefer-default-export
export const formatHandler = (file1, file2) => {
  let res;
  const extensionFile1 = getExtname(file1);
  const extensionFile2 = getExtname(file2);
  if (extensionFile1 !== extensionFile2) {
    throw new Error('Files has diffident extensions.');
  }
  const file1Path = SearchFile(file1);
  const file2Path = SearchFile(file2);
  // eslint-disable-next-line default-case
  switch (extensionFile1) {
    case '.json':
      res = filesComparer(readJsonFile(file1Path), readJsonFile(file2Path));
      break;
  }
  return res;
};
