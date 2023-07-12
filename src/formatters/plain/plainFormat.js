import _ from 'lodash';

export const addPath = (path, key) => (path.length > 1 ? `${path}.${key}` : key);

export const wrapStr = (value) => (typeof value === 'string' && value !== '[complex value]' ? `'${value}'` : value);
export const checkIfComplex = (val) => (_.isObject(val) ? '[complex value]' : val);

export const plainFormat = (keyword, head, key, oldValue = '', newValue = '') => {
  const prevVal = wrapStr(checkIfComplex(oldValue));
  const newVal = wrapStr(checkIfComplex(newValue));
  const newHead = addPath(head, key);
  const formats = {
    added: `Property '${newHead}' was added with value: ${newVal}`,
    removed: `Property '${newHead}' was removed`,
    updated: `Property '${newHead}' was updated. From ${prevVal} to ${newVal}`,
  };
  return `${formats[keyword]}\n`;
};
