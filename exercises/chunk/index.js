// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let newArr = []
//   let finalArr = []
//   if (array.length < size) {
//     return finalArr.push(newArr)
//   }
//   for (let i = 0; i < array.length; i++) {
//     newArr.push(array[i])
//     if (newArr.length === size || i === array.length - 1 ) {
//       finalArr.push(newArr)
//       newArr = []
//     }
//   }
//   return (finalArr)
// }

// function chunk(array, size) {
//   const chunked = []

//   for (let num of array) {
//     // get the last array in chunked to check the length === size
//     const last = chunked[chunked.length - 1]
//     if (!last || last.length === size) {
//       chunked.push([num])
//     } else {
//       last.push(num)
//     }
//   }
//   return chunked
// }

function chunk(array, size) {
  const chunked = []
  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }

  return chunked
}

module.exports = chunk;
