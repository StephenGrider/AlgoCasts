const solution = require('./index');

test('return first index matching given index, of given array', () => {
	expect(solution([1, 3, 1, 4, 2, 3, 5, 4])).toEqual(6);
});

// A[0] = 1
// A[1] = 3
// A[2] = 1
// A[3] = 4
// A[4] = 2
// A[5] = 3
// A[6] = 5
// A[7] = 4