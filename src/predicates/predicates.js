import _ from 'lodash';

export const HasProperty = (object1, key) => Object.hasOwn(object1, key);
export const isValuesAreEqual = (object1, object2, key) => object1[key] === object2[key];
// eslint-disable-next-line max-len
export const isBothObjectHaveProperty = (object1, object2, key) => HasProperty(object1, key) === true && HasProperty(object2, key);

export function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export const isEqual = (obj1, obj2) => !_.isEqual(obj1, obj2);

export const isWhichObject = (obj1, obj2) => {
  /**
   If two item are objects ->return 'both'
   */
  const one = isObject(obj1);
  const two = isObject(obj2);
  let ans;
  if (one === two && one === true) {
    ans = 'both';
  } else if (one !== two && one === true) {
    ans = 'file1';
  } else if (one !== two && two === true) {
    ans = 'file2';
  } else {
    ans = 'none';
  }
  return ans;
};

export const blank = () => {};

export const isNotBlank = (obj1, obj2) => {
  let ans;
  if (obj1 === blank) {
    ans = 'left';
  } else if (obj2 === blank) {
    ans = 'right';
  } else if (obj2 !== blank && obj1 !== blank && obj2 !== obj1) {
    ans = 'none';
  }
  return ans;
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
