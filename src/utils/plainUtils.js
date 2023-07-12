import _ from 'lodash';
import { plainFormat } from '../formatters/plain/plainFormat.js';
import { isNotBlank, blank } from '../predicates/predicates.js';

export const returnIfAnyArgIsFunc = (firstArg, secondArg, path, key) => {
  switch (isNotBlank(firstArg, secondArg)) {
    case 'left':
      return plainFormat('added', path, key, firstArg, secondArg);
    case 'right':
      return plainFormat('removed', path, key, firstArg, secondArg);
    case 'none':
      return plainFormat('updated', path, key, firstArg, secondArg);
    default:
      return undefined;
  }
};

export const getKeyFromObj = (obj1, key) => _.get(obj1, key, blank);
export const sort = (array) => _.sortBy(array);
