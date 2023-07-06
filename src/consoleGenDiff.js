import { program } from 'commander';

// const join = (first, second, connector = '') => `${first}${connector}${second}`;

program
  .name('gendiff')
  .description(' Compares two configuration files and shows a difference.')
  .version('1.0.0');

program
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>');
// .command('join')
// .description('Команда соединяет две строки в одну')

// .action((first, second, options) => {
// BEGIN (write your solution here)
// console.log(join(first, second, options.connector));
// END
// });

export default program;
