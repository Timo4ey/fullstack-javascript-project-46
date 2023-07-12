import { sorting } from './sortArrString.js';

const getKeys = (object1 = null, object2 = null) => {
  if (object1 !== null && object2 !== null) {
    return sorting(Object.keys({ ...object1, ...object2 }));
  }
  if (object1 !== null && object2 === null) {
    return sorting(Object.keys({ ...object1 }));
  }
  return sorting(Object.keys({ ...object2 }));
};

export default getKeys;
