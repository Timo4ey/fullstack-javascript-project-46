import { program } from 'commander';

// const join = (first, second, connector = '') => `${first}${connector}${second}`;

program
  .name('string-util')
  .description('Usage: gendiff [options]')
  .description(' Compares two configuration files and shows a difference.')
  .version('1.0.0');

// program
//   .command('join')
//   .description('Команда соединяет две строки в одну')
//   .argument('<first>', 'первая строка')
//   .argument('<second>', 'вторая строка')
//   .option('-c, --connector <type>', 'соединительная строка', '')
//   .action((first, second, options) => {
//     // BEGIN (write your solution here)
//     console.log(join(first, second, options.connector));
//     // END
//   });

export default program;
