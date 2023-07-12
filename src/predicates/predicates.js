import _ from 'lodash';

export const HasProperty = (object1, key) => Object.hasOwn(object1, key);
export const isValuesAreEqual = (object1, object2, key) => object1[key] === object2[key];
// eslint-disable-next-line max-len
export const isBothObjectHaveProperty = (object1, object2, key) => HasProperty(object1, key) === true && HasProperty(object2, key);

export function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export const isEqual = (obj1, obj2) => _.isEqual(obj1, obj2);

export const isWhichObject = (obj1, obj2) => {
  /**
   If two item are objects ->return 'both'
   */
  const one = isObject(obj1);
  const two = isObject(obj2);
  if (one === two && one === true) {
    return 'both';
  }
  if (one !== two && one === true) {
    return 'file1';
  }
  if (one !== two && two === true) {
    return 'file2';
  }
  return 'none';
};

export const blank = () => {};

export const isNotBlank = (obj1, obj2) => {
  if (obj1 === blank) {
    return 'left';
  }
  if (obj2 === blank) {
    return 'right';
  }
  if (obj2 !== blank && obj1 !== blank && obj2 !== obj1) {
    return 'none';
  }
  return 'both';
};

export const isFirstElObject = (firstArg, secondArg) => {
  const res = !_.isObject(firstArg) && _.isObject(secondArg);
  return res;
};

export const isObjectAndNotFunc = (item) => _.isObject(item) && typeof item !== 'function';

export const areObjectsAndNotFunc = (item1, item2) => {
  const res = !isObjectAndNotFunc(item1) || !isObjectAndNotFunc(item2);
  return res;
};
