const q009 = require('../q009');

test('Check if 121 is palindrome', () => {
  expect(q009(121)).toBe(true);
});

test('Check if 122 is palindrome', () => {
  expect(q009(122)).toBe(false);
});

test('Check if 12321 is palindrome', () => {
  expect(q009(12321)).toBe(true);
});

test('Check if 1231 is palindrome', () => {
  expect(q009(1231)).toBe(false);
});

test('Check if 0 is palindrome', () => {
  expect(q009(0)).toBe(true);
});