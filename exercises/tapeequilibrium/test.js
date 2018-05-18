const solution = require('./index');

test('given a non-empty array A of N integers, returns the minimal difference that can be achieve', () => {
	expect(solution([3, 1, 2, 4, 3])).toEqual(1);
});
