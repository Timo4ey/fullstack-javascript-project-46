import filesComparer from '../src/filesComparer/filesComparer.js';
import * as data from './importForComparer.js';

test('Test1 filesComparer', () => {
  const t = filesComparer(data.testOneFile1, data.testOneFile2);

  expect(t).toEqual(data.test1Json);
});

test('Test2 filesComparer', () => {
  const t = filesComparer(data.testTwoFile1, data.testTwoFile2);

  expect(t).toEqual(data.test2Json);
});

test('Test3 filesComparer', () => {
  const t = filesComparer(data.testThreeFile1, data.testThreeFile2);

  expect(t).toEqual(data.test3Json);
});

test('Test4 filesComparer', () => {
  const t = filesComparer(data.testFourFile1, data.testFourFile2);

  expect(t).toEqual(data.test4Json);
});

test('Test5 Nested filesComparer', () => {
  const t = filesComparer(data.testOneFile1Nested, data.testOneFile2Nested);

  expect(t).toEqual(data.test1JsonNested);
});

test('Test6 Nested filesComparer', () => {
  const t = filesComparer(data.testOneFile1Nested1, data.testOneFile2Nested2);

  expect(t).toEqual(data.test1JsonNested2);
});

test('Test7 Nested filesComparer', () => {
  const t = filesComparer(
    data.testOneFile1BigNested5,
    data.testOneFile2BigNested5,
  );

  expect(t).toEqual(data.test1JsonBigNested);
});

test('Test8 Nested filesComparer', () => {
  const t = filesComparer(
    data.testOneFile1RecursShort,
    data.testOneFile2RecursShort,
  );

  expect(t).toEqual(data.test1JsonRecursShort);
});
