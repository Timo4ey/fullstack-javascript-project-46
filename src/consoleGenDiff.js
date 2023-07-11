import { program } from 'commander';
import { formatHandler } from './middleware/formatHandler.js';
// const join = (first, second, connector = '') => `${first}${connector}${second}`;

program
  .name('gendiff')
  .description(' Compares two configuration files and shows a difference.')
  .version('1.0.0');

program
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((first, second) => {
    // eslint-disable-next-line no-console
    console.log(formatHandler(first, second));
  });
// .command('join')
// .description('Команда соединяет две строки в одну')

// BEGIN (write your solution here)
// END

export default program;
