const solution = require('./index');

test('return length of largest binary gap for 9', () => {
	expect(solution(9)).toEqual(2);
});
test('return length of largest binary gap for 20', () => {
	expect(solution(20)).toEqual(2);
});
test('return length of largest binary gap for 529', () => {
	expect(solution(529)).toEqual(4);
});
test('return length of largest binary gap for 15', () => {
	expect(solution(15)).toEqual(0);
});
test('return length of largest binary gap for 1162', () => {
	expect(solution(1162)).toEqual(3);
});
test('return length of largest binary gap for 66561', () => {
	expect(solution(66561)).toEqual(9);
});

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. 
// The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
// The number 20 has binary representation 10100 and contains one binary gap of length 1. 
// The number 15 has binary representation 1111 and has no binary gaps.
