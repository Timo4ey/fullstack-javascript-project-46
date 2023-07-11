import _ from 'lodash';
import readYMLFile from '../src/checkAndGetFiles/readYMlFile.js';

test('Test1 filesComparer', () => {
  const t = _.isObject(
    readYMLFile('__tests__/__fixtures__/yml_tests_data/test_1_file1.yml'),
  );

  expect(t).toBeTruthy();
});
