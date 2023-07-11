// eslint-disable-next-line import/no-extraneous-dependencies
import yml from 'js-yaml';
import * as fs from 'node:fs';

const readYMLFile = (pathToFile) => yml.load(fs.readFileSync(pathToFile));

export default readYMLFile;
