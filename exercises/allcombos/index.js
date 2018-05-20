
function solution(A) {
	if (A.length === 1) {
		return A[0]
	} else {

		let sub = ''
		let master = []
		let max = 0;

		A.forEach((a, i) => {
			if (a.length > max) {
				max = a.length;
				index = i;
			}
		});

		console.log('max: ', max);

		for (let i = 0; i < A.length; i++) {

			for (let j = 0; j < max; j++) {
				sub += A[i][j]
				sub += A[i][j]
				sub += A[i][j]
				master.push(sub)
				console.log('sub: ', sub);
				console.log('master: ', master);
				sub = ''
			}
		}
	}
}

solution([["a", "b"], ["c", "d", "e"], ["f", "g"]])

module.exports = solution;


// function printNumber(n, dec = 1) {
// 	if (n === 0) {
// 		return;
// 	}
// 	console.log(n);
// 	// n--
// 	printNumber(n - dec);
// }

// printNumber(10);
// // printNumber(10, 2);
