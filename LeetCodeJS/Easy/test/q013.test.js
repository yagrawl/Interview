const q013 = require('../q013');

test('Convert I to Int', () => {
  expect(q013('I')).toBe(1);
});

test('Convert IV to Int', () => {
  expect(q013('IV')).toBe(4);
});

test('Convert XIX to Int', () => {
  expect(q013('XIX')).toBe(19);
});

test('Convert XXXVI to Int', () => {
  expect(q013('XXXVI')).toBe(36);
});

test('Convert MMXII to Int', () => {
  expect(q013('MMXII')).toBe(2012);
});

test('Convert MCMXCVI to Int', () => {
  expect(q013('MCMXCVI')).toBe(1996);
});