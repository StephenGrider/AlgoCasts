// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// ------------------ course solution--------------------//
function chunk(array, size) {
	let newArray = []
	let index = 0
	while (index < array.length) {
		newArray.push(array.slice(index, index + size))
		index += size
	}
	console.log(newArray);
	return newArray
}

// ------------------ my original solution--------------------//
// function chunk(array, size) {
// 	let newArray = []
// 	let sizeCount = 0
// 	for (i = 0; i < array.length; i++) {
// 		let newChunk = array.slice(size * i, size + sizeCount)
// 		sizeCount += size
// 		if (newChunk.length > 0) {
// 			newArray.push(newChunk)
// 		}
// 	}
// 	console.log(newArray);
// 	return newArray
// }


module.exports = chunk;
