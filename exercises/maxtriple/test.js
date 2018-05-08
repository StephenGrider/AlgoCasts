const maxTriple = require('./index');

test('maxTriple function exists', () => {
	expect(typeof maxTriple).toEqual("function");
});

test('Finds the product of maximum triple with positive integers', () => {
	expect(maxTriple([-1, -2, -3, 1, 2, 3])).toEqual(6);
});

test('Finds the product of maximum triple with positive integers', () => {
	expect(maxTriple([1, 2, 3])).toEqual(6);
});

test('Finds the product of maximum triple with positive integers', () => {
	expect(maxTriple([1, 2, 3])).toEqual(6);
});

