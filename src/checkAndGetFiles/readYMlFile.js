// eslint-disable-next-line import/no-extraneous-dependencies
import yml from 'js-yaml';
import * as fs from 'node:fs';

export const readYMLFile = (pathToFile) => yml.load(fs.readFileSync(pathToFile));
export const readTwoYMLFiles = (pathToFile1, pathToFile2) => [
  readYMLFile(pathToFile1),
  readYMLFile(pathToFile2),
];
