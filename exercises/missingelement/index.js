function solution(arr) {


	function mySort(A) {
		return [].slice.call(A).sort(function (a, b) {
			return a - b;
		});
	}

	let newArr = mySort(arr)
	console.log('newArr: ', newArr);
	let start = newArr[0];
	let end = newArr[newArr.length - 1];
	let comparisonArr = [];

	for (let i = start; i <= end; i++) {
		comparisonArr.push(i);
	}

	let result = comparisonArr.find((el, i) => el != newArr[i]);
	console.log(result)

	if (result === 'undefined') {
		debugger
	} else {
		return result
	}
}

solution([4, 3, 1, 5]);				// 2
solution([2, 3, 1, 5]);				// 4
solution([3, 5, 4, 2, 7]);		// 6
solution([3, 9, 4, 5, 7, 6]);	// 8

module.exports = solution;


// function solution(arr) {
// 	// let newArr = arr.sort(function (a, b) { return a - b })
// 	arr.sort(function (a, b) { return a - b })


// 	debugger;

// 	let start = newArr[0]
// 	let end = newArr[newArr.length - 1]
// 	let comparisonArr = []
// 	for (let i = start; i <= end; i++) {
// 		comparisonArr.push(i);
// 	}

// 	return comparisonArr.find((el, i) => el != newArr[i])
// }

// solution([4, 3, 1, 5]);				// 2
// solution([2, 3, 1, 5]);				// 4
// solution([3, 5, 4, 2, 7]);		// 6
// solution([3, 9, 4, 5, 7, 6]);	// 8

// module.exports = solution;