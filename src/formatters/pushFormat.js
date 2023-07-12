// eslint-disable-next-line import/prefer-default-export
import _ from 'lodash';
import getKeys from '../utils/getKeys.js';

export const pushFormat = (key, func = null, depth = 2, symbol = ' ', ...items) => {
  const numberOfTimes = items.length;
  let ans;
  const symbols = symbol.split('');
  if (func === null) {
    ans = getKeys(items).flatMap((i) => {
      const res = `${' '.repeat(depth)}${symbols[i]} ${key}: ${items[i]}\n`;
      return res;
    });
  } else if (numberOfTimes !== 2) {
    ans = `${' '.repeat(depth + 2)}  ${key}: {\n${func(items[0], {}, depth + 2)}${' '.repeat(depth + 2)}}\n`;
  } else if ((numberOfTimes >= 2 && items[0]) || items[1]) {
    ans = `${' '.repeat(depth)}${symbol[0]} ${key}: {\n${func(...items, depth + 2)}${' '.repeat(depth + 2)}}\n`;
    return ans;
  }
  return ans;
};

export const pushFormatPure = (item, depth = 2) => {
  // eslint-disable-next-line no-restricted-syntax
  const output = getKeys(item).flatMap((key) => {
    let ans;
    if (_.isObject(item[key])) {
      ans = `${' '.repeat(depth + 4)}  ${key}: {\n${pushFormatPure(item[key], depth + 4)}${' '.repeat(depth + 6)}}\n`;
    } else {
      ans = `${' '.repeat(depth + 4)}  ${key}: ${item[key]}\n`;
    }
    return ans;
  });
  return output;
};
