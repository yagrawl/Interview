const q038 = require("../q038");

test('Check for n = 4', () => {
	expect(q038(4)).toBe("1211");
});

test('Check for n = 1', () => {
	expect(q038(1)).toBe("1");
});

test('Check for n = 5', () => {
	expect(q038(5)).toBe("111221");
});

test('Check for n = 3', () => {
	expect(q038(3)).toBe("21");
});

test('Check for n = 2', () => {
	expect(q038(2)).toBe("11");
});