import _ from 'lodash';
import sortArrString from './sortArrString.js';
import getKeys from './getKeys.js';
import {
  HasProperty,
  isWhichObject,
} from '../predicates/predicates.js';

// val val

import { pushFormat, pushFormatPure } from './pushFormat.js';

const filesComparer = (file1, file2) => {
  const arr = [];
  const inner = (item1, item2, depth = 0) => {
    const output = [];
    const keys = getKeys(item1, item2).sort(sortArrString);
    // eslint-disable-next-line no-restricted-syntax, no-unreachable-loop
    for (const key of keys) {
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
              if (_.isObject(item2[key]) === _.isObject(item2[key])) {
                if (_.isEqual(item1[key], item2[key])) {
                  output.push(
                    ...pushFormat(key, null, depth + 2, ' ', item1[key]),
                  );
                } else if (
                  HasProperty(item1, key)
                  && !HasProperty(item2, key)
                ) {
                  output.push(
                    ...pushFormat(key, null, depth + 2, '-', item1[key]),
                  );
                } else if (
                  !HasProperty(item1, key)
                  && HasProperty(item2, key)
                ) {
                  output.push(
                    ...pushFormat(key, null, depth + 2, '+', item2[key]),
                  );
                } else if (!_.isEqual(item1[key], item2[key])) {
                  output.push(
                    ...pushFormat(
                      key,
                      null,
                      depth + 2,
                      '-+',
                      item1[key],
                      item2[key],
                    ),
                  );
                }
              } //
              break;
            case 'file1':
              if (!HasProperty(item2, key)) {
                output.push(
                  `${' '.repeat(depth + 2)}- ${key}: {\n${pushFormatPure(
                    item1[key],
                    depth + 2, // del deptph add 2
                  )}${' '.repeat(depth + 4)}}\n`,
                );
              } else if (!_.isEqual(item1[key], item2[key])) {
                output.push(
                  `${' '.repeat(depth + 2)}- ${key}: {\n${pushFormatPure(
                    item1[key],
                    depth + 2, // del deptph add 2
                  )}${' '.repeat(depth + 4)}}\n`,
                );
                output.push(
                  ...pushFormat(key, null, depth + 2, '+', item2[key]),
                );
              }
              break;
            case 'file2':
              if (!HasProperty(item1, key)) {
                output.push(
                  `${' '.repeat(depth + 2)}+ ${key}: {\n${pushFormatPure(
                    item2[key],
                    depth + 2,
                  )}${' '.repeat(depth + 4)}}\n`,
                );
              } else if (!_.isEqual(item2[key], item1[key])) {
                output.push(
                  ...pushFormat(key, null, depth + 2, '-', item1[key]),
                );
                output.push(
                  `${' '.repeat(depth + 2)}+ ${key}: {\n${pushFormatPure(
                    item2[key],
                    depth + 2,
                  )}${' '.repeat(depth + 4)}}\n`,
                );
              }
              break;
            case 'both':
              if (_.isEqual(item1[key], item2[key])) {
                output.push(
                  ...pushFormat(key, inner, depth + 2, ' ', item1[key], {}),
                );
              } else if (!_.isEqual(item1[key], item2[key])) {
                output.push(
                  ...pushFormat(
                    key,
                    inner,
                    depth + 2,
                    ' ',
                    item1[key],
                    item2[key],
                  ),
                );
              }
              break;
          }
          break;
        case 'file1':
          if (typeof item2 === 'string') {
            output.push(
              `${' '.repeat(depth + 2)}- ${key}: {\n${pushFormatPure(
                item1[key],
                depth + 2,
              )}${' '.repeat(depth + 4)}}\n`,
            );
            output.push(...pushFormat(key, null, depth, '+', item2[key]));
          } else {
            output.push(
              `${' '.repeat(depth + 2)}- ${key}: {\n${pushFormatPure(
                item1[key],
                depth + 2,
              )}${' '.repeat(depth + 4)}}\n`,
            );
          }
          break;
        case 'file2':
          if (typeof item1 === 'string') {
            output.push(...pushFormat(key, null, depth, '-', item1[key]));
            output.push(
              `${' '.repeat(depth + 2)}+ ${key}: {\n${pushFormatPure(
                item2[key],
                depth + 2,
              )}${' '.repeat(depth + 4)}}\n`,
            );
          } else {
            output.push(
              `${' '.repeat(depth + 2)}+ ${key}: {\n${pushFormatPure(
                item2[key],
                depth + 2,
              )}${' '.repeat(depth + 4)}}\n`,
            );
          }
          break;
        case 'none':
          if (typeof item1 === 'string' && typeof item2 === 'string') {
            output.push(...pushFormat(key, null, depth, '-', item1[key]));
            output.push(...pushFormat(key, null, depth, '+', item2[key]));
          } else if (typeof item1 === 'string' && typeof item2 !== 'string') {
            output.push(...pushFormat(key, null, depth, '-', item1[key]));
          } else {
            output.push(...pushFormat(key, null, depth, '+', item2[key]));
          }
          break;
      }
    }
    return output;
  };
  arr.push(inner(file1, file2));
  arr.unshift('{\n');
  arr.push('}');
  return arr.join().replace(/,/g, '');
};

export default filesComparer;
