import _ from 'lodash';


const HasProperty = (object1, key) => Object.hasOwn(object1, key);
const isValuesAreEqual = (object1, object2, key) =>
  object1[key] === object2[key];
// eslint-disable-next-line max-len
const isBothObjectHaveProperty = (object1, object2, key) =>
  HasProperty(object1, key) === true && HasProperty(object2, key);

function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

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

export { HasProperty, isValuesAreEqual, isBothObjectHaveProperty, isObject };
