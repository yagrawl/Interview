const q067 = require('../q067');

test('Binary "11" + "1"', () => {
  expect(q067("11", "1")).toBe("100");
});

test('Binary "1001101" + "0010010"', () => {
  expect(q067("1001101", "0010010")).toBe("1011111");
});

test('Binary "0" + "1"', () => {
  expect(q067("0", "1")).toBe("1");
});

test('Binary "0" + "0"', () => {
  expect(q067("0", "0")).toBe("0");
});

test('Binary "1" + "11"', () => {
  expect(q067("1", "11")).toBe("100");
});