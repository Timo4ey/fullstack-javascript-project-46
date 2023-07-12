import getKeys from '../../utils/getKeys.js';
import sortArrString from '../../utils/sortArrString.js';
import { plainFormat, addPath } from './plainFormat.js';
import { isFirstElObject, areObjectsAndNotFunc, isEqual } from '../../predicates/predicates.js';
import { returnIfAnyArgIsFunc, getKeyFromObj } from '../../utils/plainUtils.js';

const plain = (file1, file2) => {
  const inner = (obj1, obj2, path = '') => {
    const keys = getKeys(obj1, obj2).sort(sortArrString);
    const res = keys.flatMap((key) => {
      if (isEqual(obj1, obj2)) {
        let ans;
        const [firstArg, secondArg] = [getKeyFromObj(obj1, key), getKeyFromObj(obj2, key)];

        if (areObjectsAndNotFunc(firstArg, secondArg)) {
          ans = returnIfAnyArgIsFunc(firstArg, secondArg, path, key);
        } else if (isFirstElObject(firstArg, secondArg)) {
          ans = plainFormat('added', path, key, firstArg, secondArg);
        } else {
          ans = inner(firstArg, secondArg, addPath(path, key));
        }
        return ans;
      }
      return res;
    });
    return res;
  };
  return inner(file1, file2).join().replace(/,/g, '').trimEnd();
};

export default plain;
