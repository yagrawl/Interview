const q069 = require('../q069');

test('Sqrt of 4', () => {
  expect(q069(4)).toBe(2);
});

test('Sqrt of 729', () => {
  expect(q069(729)).toBe(27);
});

test('Sqrt of 101', () => {
  expect(q069(101)).toBe(10);
});

test('Sqrt of 8', () => {
  expect(q069(8)).toBe(2);
});

test('Sqrt of 0', () => {
  expect(q069(0)).toBe(0);
});


