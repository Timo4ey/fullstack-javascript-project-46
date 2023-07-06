const HasProperty = (object1, key) => Object.hasOwn(object1, key);
const isValuesAreEqual = (object1, object2, key) => object1[key] === object2[key];
// eslint-disable-next-line max-len
const isBothObjectHaveProperty = (object1, object2, key) => HasProperty(object1, key) === true && HasProperty(object2, key);

export { HasProperty, isValuesAreEqual, isBothObjectHaveProperty };
