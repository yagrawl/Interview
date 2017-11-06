const q066 = require('../q066');

test('Add one normal', () => {
  expect(q066([3,2,1,3])[0]).toBe(3);
  expect(q066([3,2,1,3])[1]).toBe(2);
  expect(q066([3,2,1,3])[2]).toBe(1);
  expect(q066([3,2,1,3])[3]).toBe(4);

});

test('Add one carry', () => {
  expect(q066([3,2,1,9])[0]).toBe(3);
  expect(q066([3,2,1,9])[1]).toBe(2);
  expect(q066([3,2,1,9])[2]).toBe(2);
  expect(q066([3,2,1,9])[3]).toBe(0);

});

test('Zero add', () => {
  expect(q066([0])[0]).toBe(1);
});

test('All carry', () => {
  expect(q066([9,9,9,9])[0]).toBe(1);
  expect(q066([9,9,9,9])[1]).toBe(0);
  expect(q066([9,9,9,9])[2]).toBe(0);
  expect(q066([9,9,9,9])[3]).toBe(0);
  expect(q066([9,9,9,9])[4]).toBe(0);
});

test('two carries', () => {
  expect(q066([9,3,9,9])[0]).toBe(9);
  expect(q066([9,3,9,9])[1]).toBe(4);
  expect(q066([9,3,9,9])[2]).toBe(0);
  expect(q066([9,3,9,9])[3]).toBe(0);
});