const getKeys = (object1 = null, object2 = null) => {
  if (object1 !== null && object2 !== null) {
    return Object.keys({ ...object1, ...object2 });
  }
  if (object1 !== null && object2 === null) {
    return Object.keys({ ...object1 });
  }
  return Object.keys({ ...object2 });
};

export default getKeys;
