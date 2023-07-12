import getKeys from '../../utils/getKeys.js';
import { plainFormat, addPath } from './plainFormat.js';
import { isFirstElObject, areObjectsAndNotFunc, isEqual } from '../../predicates/predicates.js';
import { returnIfAnyArgIsFunc, getKeyFromObj } from '../../utils/plainUtils.js';

const plain = (file1, file2) => {
  const inner = (obj1, obj2, path = '') => {
    const res = getKeys(obj1, obj2).flatMap((key) => {
      if (!isEqual(obj1, obj2)) {
        const [firstArg, secondArg] = [getKeyFromObj(obj1, key), getKeyFromObj(obj2, key)];

        if (areObjectsAndNotFunc(firstArg, secondArg)) {
          return returnIfAnyArgIsFunc(firstArg, secondArg, path, key);
        }
        if (isFirstElObject(firstArg, secondArg)) {
          return plainFormat('added', path, key, firstArg, secondArg);
        }
        return inner(firstArg, secondArg, addPath(path, key));
      }
      return res;
    });
    return res;
  };
  return inner(file1, file2).join().replace(/,/g, '').trimEnd();
};

export default plain;
