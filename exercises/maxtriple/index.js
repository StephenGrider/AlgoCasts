// maximum triple

input1 = [10, 3, 5, 6, 20]
// Output: 1200
// Multiplication of 10, 6 and 20

input2 = [-10, -3, -5, -6, -20]
// Output: -90

input3 = [1, -4, 3, -6, 7, 0]
// Output: 168

const nums = [1, 2, 3]

// function maxTriple(arr) {
// 	let result = 0
// 	let sortedArr = arr.sort((a, b) => a < b ? -1 : 1)
// 	let last3 = sortedArr.splice(sortedArr.length - 3, 3)

// 	result = last3[0] * last3[1] * last3[2]

// 	console.log('sortedArr: ', sortedArr)
// 	console.log('last3: ', last3)
// 	console.log('result: ', result)

// 	let max = 0
// 	for (let i = 0; i < arr.length; i++) {
// 	}
// 	return result
// }

maxTriple(input1)
maxTriple(input2)
maxTriple(input3)

module.exports = maxTriple;



function maxTriple(arr) {

	function isPositive(number) {
		if (number > 0) {
			return true;
		}
		if (number < 0) {
			return false;
		}
		if (1 / number === Number.POSITIVE_INFINITY) {
			return true;
		}
		return false;
	}





	let result = 0
	let sortedArr = arr.sort((a, b) => a < b ? -1 : 1)
	let last3 = sortedArr.splice(sortedArr.length - 3, 3)

	result = last3[0] * last3[1] * last3[2]

	console.log('sortedArr: ', sortedArr)
	console.log('last3: ', last3)
	console.log('result: ', result)
	return result
}
