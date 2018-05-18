const solution = require('./index');

test('given an array, return the missing element', () => {
	expect(solution(1, 3, 4, 5)).toEqual(2);
});

test('given an array, return the missing element', () => {
	expect(solution(2, 3, 1, 5)).toEqual(4);
});

test('given an array, return the missing element', () => {
	expect(solution(3, 5, 4, 2, 7)).toEqual(6);
});

test('given an array, return the missing element', () => {
	expect(solution(3, 9, 4, 5, 7, 6)).toEqual(8);
});
