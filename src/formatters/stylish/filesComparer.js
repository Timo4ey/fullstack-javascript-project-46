import _ from 'lodash';
import sortArrString from '../../utils/sortArrString.js';
import getKeys from '../../utils/getKeys.js';
import { HasProperty, isWhichObject } from '../../predicates/predicates.js';

// val val

import { pushFormat, pushFormatPure } from '../pushFormat.js';

const filesComparer = (file1, file2) => {
  const inner = (item1, item2, depth = 0) => {
    const keys = getKeys(item1, item2).sort(sortArrString);
    // eslint-disable-next-line no-restricted-syntax, no-unreachable-loop
    const res = keys.flatMap((key) => {
      let ans;
      // has has eq eq
      // eslint-disable-next-line default-case
      switch (isWhichObject(item1, item2)) {
        case 'both':
          // eslint-disable-next-line default-case
          switch (isWhichObject(item1[key], item2[key])) {
            // Primitive
            // eslint-disable-next-line no-self-compare
            case 'none':
              // eslint-disable-next-line no-self-compare
              if (_.isEqual(item2[key], item2[key])) {
                if (_.isEqual(item1[key], item2[key])) {
                  ans = pushFormat(key, null, depth + 2, ' ', item1[key]);
                } else if (HasProperty(item1, key) && !HasProperty(item2, key)) {
                  ans = pushFormat(key, null, depth + 2, '-', item1[key]);
                } else if (!HasProperty(item1, key) && HasProperty(item2, key)) {
                  ans = pushFormat(key, null, depth + 2, '+', item2[key]);
                } else if (!_.isEqual(item1[key], item2[key])) {
                  ans = pushFormat(key, null, depth + 2, '-+', item1[key], item2[key]);
                }
              } //
              break;
            case 'file1':
              if (!HasProperty(item2, key)) {
                ans = `${' '.repeat(depth + 2)}- ${key}: {\n${pushFormatPure(item1[key], depth + 2)}${' '.repeat(
                  depth + 4,
                )}}\n`;
              } else if (!_.isEqual(item1[key], item2[key])) {
                ans = [
                  `${' '.repeat(depth + 2)}- ${key}: {\n${pushFormatPure(item1[key], depth + 2)}${' '.repeat(
                    depth + 4,
                  )}}\n`,
                  pushFormat(key, null, depth + 2, '+', item2[key]),
                ];
              }
              break;
            case 'file2':
              if (!HasProperty(item1, key)) {
                ans = `${' '.repeat(depth + 2)}+ ${key}: {\n${pushFormatPure(item2[key], depth + 2)}${' '.repeat(
                  depth + 4,
                )}}\n`;
              } else if (!_.isEqual(item2[key], item1[key])) {
                ans = [
                  pushFormat(key, null, depth + 2, '-', item1[key]),
                  `${' '.repeat(depth + 2)}+ ${key}: {\n${pushFormatPure(item2[key], depth + 2)}${' '.repeat(
                    depth + 4,
                  )}}\n`,
                ];
              }
              break;
            case 'both':
              if (_.isEqual(item1[key], item2[key])) {
                ans = pushFormat(key, inner, depth + 2, ' ', item1[key], {});
              } else if (!_.isEqual(item1[key], item2[key])) {
                ans = pushFormat(key, inner, depth + 2, ' ', item1[key], item2[key]);
              }
              break;
          }
          break;
        case 'file1':
          if (typeof item2 === 'string') {
            ans = [
              `${' '.repeat(depth + 2)}- ${key}: {\n${pushFormatPure(item1[key], depth + 2)}${' '.repeat(
                depth + 4,
              )}}\n`,
              pushFormat(key, null, depth, '+', item2[key]),
            ];
          } else {
            ans = `${' '.repeat(depth + 2)}- ${key}: {\n${pushFormatPure(item1[key], depth + 2)}${' '.repeat(
              depth + 4,
            )}}\n`;
          }
          break;
        case 'file2':
          if (typeof item1 === 'string') {
            ans = [
              pushFormat(key, null, depth, '-', item1[key]),
              `${' '.repeat(depth + 2)}+ ${key}: {\n${pushFormatPure(item2[key], depth + 2)}${' '.repeat(
                depth + 4,
              )}}\n`,
            ];
          } else {
            ans = `${' '.repeat(depth + 2)}+ ${key}: {\n${pushFormatPure(item2[key], depth + 2)}${' '.repeat(
              depth + 4,
            )}}\n`;
          }
          break;
        case 'none':
          if (typeof item1 === 'string' && typeof item2 === 'string') {
            ans = pushFormat(key, null, depth, '-', item1[key]);
            ans = pushFormat(key, null, depth, '+', item2[key]);
          }
          break;
      }
      return ans;
    });
    return res;
  };

  return `{\n${inner(file1, file2).join().replace(/,/g, '')}}`;
};

export default filesComparer;
