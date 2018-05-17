function solution(A, K) {
	for (let i = 0; i < K; i++) {
		A.unshift(A[A.length - 1])
		A.pop()
	}
	// console.log(A);
	return A
}

module.exports = solution;