// eslint-disable-next-line import/prefer-default-export
import _ from 'lodash';

export const pushFormat = (
  key,
  func = null,
  depth = 2,
  symbol = ' ',
  ...items
) => {
  const numberOfTimes = items.length;
  const res = [];

  if (func === null) {
    for (let i = 0; i < numberOfTimes; i += 1) {
      res.push(`${' '.repeat(depth)}${symbol[i]} ${key}: ${items[i]}\n`);
    }
  } else if (numberOfTimes !== 2) {
    items.push({});
    res.push(
      `${' '.repeat(depth + 2)}  ${key}: {\n${func(
        ...items,
        depth + 2,
      )}${' '.repeat(depth + 2)}}\n`,
    );
  } else if ((numberOfTimes >= 2 && items[0]) || items[1]) {
    res.push(
      `${' '.repeat(depth)}${symbol[0]} ${key}: {\n${func(
        ...items,
        depth + 2,
      )}${' '.repeat(depth + 2)}}\n`,
    );
  }
  return res;
};

export const pushFormatPure = (item, depth = 2) => {
  const output = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in item) {
    if (_.isObject(item[key])) {
      output.push(
        `${' '.repeat(depth + 4)}  ${key}: {\n${pushFormatPure(
          item[key],
          depth + 4,
        )}${' '.repeat(depth + 6)}}\n`,
      );
    } else {
      output.push(`${' '.repeat(depth + 4)}  ${key}: ${item[key]}\n`);
    }
  }
  return output.join();
};
