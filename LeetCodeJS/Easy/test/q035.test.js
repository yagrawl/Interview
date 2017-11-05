const q035 = require('../q035');

test('Test when target in array', () => {
  expect(q035([1,3,5,6], 5)).toBe(2);
});

test('Test when target not in array', () => {
  expect(q035([1,3,5,6], 2)).toBe(1);
});

test('Test when target outside of array', () => {
  expect(q035([1,3,5,6], 7)).toBe(4);
});

test('Test when target before array', () => {
  expect(q035([1,3,5,6], 0)).toBe(0);
});