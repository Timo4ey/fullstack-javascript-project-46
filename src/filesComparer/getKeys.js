const getKeys = (object1 = null, object2 = null) => {
  let res;
  if (object1 !== null && object2 !== null) {
    res = Object.keys({ ...object1, ...object2 });
  } else if (object1 !== null && object2 === null) {
    res = Object.keys({ ...object1 });
  } else if (object1 === null && object2 !== null) {
    res = Object.keys({ ...object2 });
  }
  return res;
};

export default getKeys;
