const q014 = require('../q014');

test('Find longest prefix', () => {
	expect(q014(['leap', 'lear', 'lea', 'leare'])).toBe('lea');
});

test('Find with empty input', () => {
	expect(q014(['', '', '', ''])).toBe('');
});

test('Find with one empty input', () => {
	expect(q014(['leap', 'lear', 'leare', ''])).toBe('');
});

test('Find with one input', () => {
	expect(q014(['leap'])).toBe('leap');
});

test('Find with no common input', () => {
	expect(q014(['lear', 'pear', 'gear', 'dear'])).toBe('');
});

test('Find with invalid input', () => {
	expect(q014([])).toBe('');
});