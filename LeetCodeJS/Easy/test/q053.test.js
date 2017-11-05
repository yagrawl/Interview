const q053 = require('../q053');

test('Check sub array', () => {
  expect(q053([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
});

test('Sub array in 0 index', () => {
  expect(q053([4, -1, 0, -4, -3, -2, -2])).toBe(4);
});

test('Sub array in last index', () => {
  expect(q053([-3, -1, 0, -4, -3, -2, -2, 4])).toBe(4);
});

test('Array empty', () => {
  expect(q053([])).toBe(0);
});

test('Entire array', () => {
  expect(q053([3,2,2])).toBe(7);
});