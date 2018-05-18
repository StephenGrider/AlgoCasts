function solution(A) {
	let res = {}
	A.forEach(num => res[num] ? res[num]++ : res[num] = 1)
	for (let member in res) {
		if (res[member] % 2 !== 0) {
			return parseInt(member)
		}
	}
}

solution([9, 3, 9, 3, 9, 7, 9])
solution([9, 3, 9, 3, 9, 5, 9])
solution([9, 3, 9, 3, 9, 1, 9])

module.exports = solution;