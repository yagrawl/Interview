const q007 = require('../q007');

test('Reverse 123', () => {
  expect(q007(123)).toBe(321);
});

test('Reverse -123', () => {
  expect(q007(-123)).toBe(-321);
});

test('Check Limit +ve', () => {
  expect(q007(1534236469)).toBe(0);
});

test('Check Limit -ve', () => {
  expect(q007(-1534236469)).toBe(0);
});