#!/usr/bin/env node

import { Command } from 'commander';
import { formatHandler } from './parsers/formatHandler.js';
// const join = (first, second, connector = '') => `${first}${connector}${second}`;
const program = new Command();
program
  .name('gendiff')
  .description(' Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<firstConfig> <secondConfig>')
  .action((first, second, format) => {
    const option = program.opts().format;
    // eslint-disable-next-line no-console
    console.log(formatHandler(first, second, format.format));
  });

program.parse();

export default program;
