import fs from 'node:fs';
import filesComparer from './filesComparer.js';
import * as data from '../../__tests__/importForComparer.js';

const res = filesComparer(
  data.testOneFile1BigNested5,
  data.testOneFile2BigNested5,
);


fs.writeFileSync('__tests__/answers/output', res);
