const q058 = require('../q058');

test('Check last word length', () => {
  expect(q058('Hello World')).toBe(5);
});

test('Check no last word length', () => {
  expect(q058('Hello ')).toBe(5);
});

test('Check no last word multiple spaces length', () => {
  expect(q058('Hello  worl   ')).toBe(4);
});

test('Check no input length', () => {
  expect(q058('')).toBe(0);
});

test('Check last word different length', () => {
  expect(q058('Hello Worl')).toBe(4);
});

test('Check two spaces last word length length', () => {
  expect(q058('Hello  World')).toBe(5);
});