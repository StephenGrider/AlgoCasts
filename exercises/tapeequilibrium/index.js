
function solution(A) {
	let diff = 0
	let diffArr = []
	let part1 = 0
	let part2 = 0

	const reducer = (ac, cv) => ac + cv;

	function mySort(A) {
		return [].slice.call(A).sort(function (a, b) {
			return a - b;
		});
	}

	for (let i = 0, p = 1; i < A.length - 1; i++ , p++) {
		part1 = A.slice([0], [p])
		part2 = A.slice([p], [A.length])

		diff = part1.reduce(reducer) - part2.reduce(reducer)
		if (Math.abs(diff) > 0) {
			diffArr.push(Math.abs(diff))
		}
	}
	return mySort(diffArr)[0]
}

// solution([3, 1, 2, 4, 3])
// solution([1, 2, 3, 4, 5, 6, 7])

module.exports = solution;
