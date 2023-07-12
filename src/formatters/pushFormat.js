// eslint-disable-next-line import/prefer-default-export
import _ from 'lodash';
import getKeys from '../utils/getKeys.js';
import { HasProperty } from '../predicates/predicates.js';

export const pushFormat = (key, func = null, depth = 2, symbol = ' ', ...items) => {
  const numberOfTimes = items.length;
  const symbols = symbol.split('');
  if (func === null) {
    return getKeys(items).flatMap((i) => {
      const res = `${' '.repeat(depth)}${symbols[i]} ${key}: ${items[i]}\n`;
      return res;
    });
  }
  if (numberOfTimes !== 2) {
    return `${' '.repeat(depth + 2)}  ${key}: {\n${func(items[0], {}, depth + 2)}${' '.repeat(depth + 2)}}\n`;
  }
  return `${' '.repeat(depth)}${symbol[0]} ${key}: {\n${func(...items, depth + 2)}${' '.repeat(depth + 2)}}\n`;
};

export const pushFormatPure = (item, depth = 2) => {
  // eslint-disable-next-line no-restricted-syntax
  const output = getKeys(item).flatMap((key) => {
    if (_.isObject(item[key])) {
      return `${' '.repeat(depth + 4)}  ${key}: {\n${pushFormatPure(item[key], depth + 4)}${' '.repeat(depth + 6)}}\n`;
    }
    return `${' '.repeat(depth + 4)}  ${key}: ${item[key]}\n`;
  });
  return output;
};

export const recursPushFormatter = (depth, key, item, symbol) => {
  const part1 = `${' '.repeat(depth + 2)}${symbol} ${key}: `;
  const part2 = `{\n${pushFormatPure(item[key], depth + 2)}`;
  const part3 = `${' '.repeat(depth + 4)}}\n`;
  return `${part1}${part2}${part3}`;
};

export const getFormatFromTwoPrimitives = (item1, item2, depth, key) => {
  if (_.isEqual(item1[key], item2[key])) {
    return pushFormat(key, null, depth + 2, ' ', item1[key]);
  }
  if (HasProperty(item1, key) && !HasProperty(item2, key)) {
    return pushFormat(key, null, depth + 2, '-', item1[key]);
  }
  if (!HasProperty(item1, key) && HasProperty(item2, key)) {
    return pushFormat(key, null, depth + 2, '+', item2[key]);
  }

  return pushFormat(key, null, depth + 2, '-+', item1[key], item2[key]);
};
