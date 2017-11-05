const q027 = require('../q027');

test('Test removal of 1 instance', () => {
  expect(q027([1,2,3,4,5,6], 3)).toBe(5);
});

test('Test removal of 3 instances', () => {
  expect(q027([1,2,3,3,3,6], 3)).toBe(3);
});

test('Test removal of 0 instance', () => {
  expect(q027([1,2,3,4,5,6], 7)).toBe(6);
});

test('Test removal of all instances', () => {
  expect(q027([3,3,3,3,3,3], 3)).toBe(0);
});

test('Test removal of segregated instances', () => {
  expect(q027([3,1,2,3,5,3], 3)).toBe(3);
});