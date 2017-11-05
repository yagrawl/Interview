const q028 = require('../q028');

test('Check when needle is in haystack', () => {
  expect(q028('hello', 'll')).toBe(2);
});

test('Check when needle is not in haystack', () => {
  expect(q028('aaaaaa', 'bb')).toBe(-1);
});

test('Check when needle is the haystack', () => {
  expect(q028('hello', 'hello')).toBe(0);
});

test('Check when needle is last in haystack', () => {
  expect(q028('hello', 'o')).toBe(4);
});

test('Check when needle occurs twice in haystack', () => {
  expect(q028('hellollo', 'll')).toBe(2);
});

test('Check when needle occurs twice simultaneously in haystack', () => {
  expect(q028('hellllo', 'll')).toBe(2);
});