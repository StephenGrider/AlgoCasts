// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create a new array.
  const chunked = [];
  // iterate through the old array
  for (let i of array) {
    // check the first index of newArr
    const last = chunked[chunked.length - 1]
    // if last does not exist or its length is equal to the chunk size, push a new chunk into the chunked array.
    if (!last || last.length === size) {
      chunked.push([i])
    } else {
      // otherwise, just push an element into the last subarray with space in it.
      last.push(i)
    }
  }
  return chunked
}

module.exports = chunk;
