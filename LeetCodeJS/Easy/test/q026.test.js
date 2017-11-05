const q026 = require('../q026');

test('Check no same numbers', () => {
  expect(q026([1,2,3,4,5,6])).toBe(6);
});

test('Check 1 same numbers', () => {
  expect(q026([1,1,3,4,5,6])).toBe(5);
});

test('Check all same numbers', () => {
  expect(q026([1,1,1,1,1,1])).toBe(1);
});

test('Check 2 same numbers', () => {
  expect(q026([1,1,2,2,5,6])).toBe(4);
});

test('Check empty array', () => {
  expect(q026([])).toBe(0);
});

test('Check middle same numbers', () => {
  expect(q026([1,2,2,2,2,6])).toBe(3);
});