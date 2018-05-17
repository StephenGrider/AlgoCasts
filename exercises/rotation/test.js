const solution = require('./index');

test("return rotation of array ['a', 'b', 'c', 'd'], 1", () => {
	expect(solution(['a', 'b', 'c', 'd'], 1)).toEqual(['d', 'a', 'b', 'c']);
});

test("return rotation of array ['a', 'b', 'c', 'd'], 2", () => {
	expect(solution(['a', 'b', 'c', 'd'], 2)).toEqual(['c', 'd', 'a', 'b']);
});

test("return rotation of array ['a', 'b', 'c', 'd'], 3", () => {
	expect(solution(['a', 'b', 'c', 'd'], 3)).toEqual(['b', 'c', 'd', 'a']);
});

test("return rotation of array ['a', 'b', 'c', 'd'], 4", () => {
	expect(solution(['a', 'b', 'c', 'd'], 4)).toEqual(['a', 'b', 'c', 'd']);
});

test("return rotation of array [3, 8, 9, 7, 6], 3", () => {
	expect(solution([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
});

test("return rotation of array [0, 0, 0], 1", () => {
	expect(solution([0, 0, 0], 1)).toEqual([0, 0, 0]);
});

test("return rotation of array [1, 2, 3, 4], 4", () => {
	expect(solution([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
});
