import _ from 'lodash';

const wrapStr = (value) => (typeof value === 'string' && value !== '[complex value]'
  ? `'${value}'`
  : value);
const checkIfComplex = (val) => (_.isObject(val) ? '[complex value]' : val);

const plainFormat = (keyword, head = '', oldValue = '', newValue = '') => {
  const prevVal = wrapStr(checkIfComplex(oldValue));
  const newVal = wrapStr(checkIfComplex(newValue));
  const formats = {
    added: `Property '${head}' was added with value: ${newVal}`,
    removed: `Property '${head}' was removed`,
    updated: `Property '${head}' was updated. From ${prevVal} to ${newVal}`,
  };
  return `${formats[keyword]}\n`;
};

export default plainFormat;
