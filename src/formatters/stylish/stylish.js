import getKeys from '../../utils/getKeys.js';
import { HasProperty, isWhichObject, isEqual } from '../../predicates/predicates.js';

import { pushFormat, recursPushFormatter, getFormatFromTwoPrimitives } from '../pushFormat.js';

const stylish = (file1, file2) => {
  const walker = (item1, item2, depth = 0) => {
    const keys = getKeys(item1, item2);
    const res = keys.flatMap((key) => {
      switch (isWhichObject(item1[key], item2[key])) {
        case 'both':
          return isEqual(item1[key], item2[key])
            ? pushFormat(key, walker, depth + 2, ' ', item1[key], {})
            : pushFormat(key, walker, depth + 2, ' ', item1[key], item2[key]);
        case 'file1':
          return typeof item2 === 'string' || !HasProperty(item2, key)
            ? recursPushFormatter(depth, key, item1, '-')
            : [recursPushFormatter(depth, key, item1, '-'), pushFormat(key, null, depth + 2, '+', item2[key])];
        case 'file2':
          return typeof item1 === 'string' || !HasProperty(item1, key)
            ? recursPushFormatter(depth, key, item2, '+')
            : [pushFormat(key, null, depth + 2, '-', item1[key]), recursPushFormatter(depth, key, item2, '+')];

        default:
          return !isEqual(item2[key], item2[key])
            ? [pushFormat(key, null, depth, '-', item1[key]), pushFormat(key, null, depth, '+', item2[key])]
            : getFormatFromTwoPrimitives(item1, item2, depth, key);
      }
    });
    return res;
  };
  return `{\n${walker(file1, file2).join().replace(/,/g, '')}}`;
};

export default stylish;
