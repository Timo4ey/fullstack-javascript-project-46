import _ from 'lodash';
import { plainFormat } from '../formatters/plain/plainFormat.js';
import { isNotBlank, blank } from '../predicates/predicates.js';

export const returnIfAnyArgIsFunc = (firstArg, secondArg, path, key) => {
  let ans;
  switch (isNotBlank(firstArg, secondArg)) {
    case 'left':
      ans = plainFormat('added', path, key, firstArg, secondArg);
      break;

    case 'right':
      ans = plainFormat('removed', path, key, firstArg, secondArg);
      break;

    case 'none':
      ans = plainFormat('updated', path, key, firstArg, secondArg);
      break;

    default:
      break;
  }
  return ans;
};
export const getKeyFromObj = (obj1, key) => _.get(obj1, key, blank);
