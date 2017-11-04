const q020 = require('../q020');

test('Check valid parenthesis', () => {
  expect(q020('(){()}[]')).toBe(true);
});

test('Check empty', () => {
  expect(q020('')).toBe(true);
});

test('Check singe bracket', () => {
  expect(q020('(')).toBe(false);
});

test('Check last invalid parenthesis', () => {
  expect(q020('(){()}[')).toBe(false);
});

test('Check bundled parenthesis', () => {
  expect(q020('[{({})}]')).toBe(true);
});

test('Check different parenthesis', () => {
  expect(q020('(]')).toBe(false);
});

test('Check weird parenthesis', () => {
  expect(q020('{[(])}')).toBe(false);
});

test('Check for closing parenthesis', () => {
  expect(q020(']')).toBe(false);
});