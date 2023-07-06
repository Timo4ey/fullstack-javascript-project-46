import sortArrString from './sortArrString.js';
import {
  HasProperty,
  isValuesAreEqual,
  isBothObjectHaveProperty,
} from '../predicates/predicates.js';

const filesComparer = (file1, file2, depth = 2) => {
  const output = [];

  const keys = Object.keys({ ...file1, ...file2 }).sort(sortArrString);
  // Yes Yes
  // No Tes
  // Yes No
  // No No
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    // has has eq eq
    if (
      isBothObjectHaveProperty(file1, file2, key)
      && isValuesAreEqual(file1, file2, key)
    ) {
      output.push(`${' '.repeat(depth)}  ${key}: ${file1[key]}\n`);
      // has has eq eqPP
    } else if (
      isBothObjectHaveProperty(file1, file2, key)
      && !isValuesAreEqual(file1, file2, key)
    ) {
      output.push(`${' '.repeat(depth)}- ${key}: ${file1[key]}\n`);
      output.push(`${' '.repeat(depth)}+ ${key}: ${file2[key]}\n`);
      //   has hasn't
    } else if (HasProperty(file1, key) && !HasProperty(file2, key)) {
      output.push(`${' '.repeat(depth)}- ${key}: ${file1[key]}\n`);
      //   hasn't has
    } else if (!HasProperty(file1, key) && HasProperty(file2, key)) {
      output.push(`${' '.repeat(depth)}+ ${key}: ${file2[key]}\n`);
    }
  }
  output.unshift('{\n');
  output.push('}');
  return output.join().replace(/,/g, '');
};

// console.log(filesComparer(testOneFile1, testOneFile2));

export default filesComparer;
