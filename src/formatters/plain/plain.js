import _ from 'lodash';
import getKeys from '../../utils/getKeys.js';
import sortArrString from '../../utils/sortArrString.js';
import plainFormat from './plainFormat.js';

class Blank {}

const addPath = (path, key) => (path.length > 1 ? `${path}.${key}` : key);

const isNotBlank = (obj1, obj2) => {
  let ans;
  if (obj1 === Blank) {
    ans = 'left';
  } else if (obj2 === Blank) {
    ans = 'right';
  } else if (obj2 !== Blank && obj1 !== Blank && obj2 !== obj1) {
    ans = 'none';
  }
  return ans;
};

const isObjectAndNotFunc = (item) => _.isObject(item) && typeof item !== 'function';

const areObjectsAndNotFunc = (item1, item2) => {
  const res = !isObjectAndNotFunc(item1) || !isObjectAndNotFunc(item2);
  return res;
};

const plain = (file1, file2) => {
  const output = [];

  const inner = (obj1, obj2, path = '') => {
    const keys = getKeys(obj1, obj2).sort(sortArrString);

    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
      if (!_.isEqual(obj1, obj2)) {
        const [firstArg, secondArg] = [
          _.get(obj1, key, Blank),
          _.get(obj2, key, Blank),
        ];

        if (areObjectsAndNotFunc(firstArg, secondArg)) {
          switch (isNotBlank(firstArg, secondArg)) {
            case 'left':
              output.push(
                plainFormat('added', addPath(path, key), firstArg, secondArg),
              );
              break;
            case 'right':
              output.push(
                plainFormat('removed', addPath(path, key), firstArg, secondArg),
              );
              break;
            case 'none':
              output.push(
                plainFormat('updated', addPath(path, key), firstArg, secondArg),
              );
              break;
            default:
              break;
          }
        } else if (!_.isObject(firstArg) && _.isObject(secondArg)) {
          output.push(
            plainFormat('added', addPath(path, key), firstArg, secondArg),
          );
        } else {
          output.push(inner(firstArg, secondArg, addPath(path, key)));
        }
      }
    }
  };
  inner(file1, file2);
  return output.join().replace(/,/g, '').trimEnd();
};

export default plain;
