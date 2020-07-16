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
  return chunkWithSlice(array, size);
}

/**
 * This is the provided solution using provided .slice() method.
 *
 * @param {*} array
 * @param {*} size
 * @returns
 */
function chunkWithSlice(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

function chunkWithIteration(array, size) {
  if (array.length < size) {
    return [array];
  }

  let results = [];
  let currentChunk = [];
  for (let elem of array) {
    if (currentChunk.length < size) {
      currentChunk.push(elem);
    } else {
      results.push(currentChunk);
      currentChunk = [elem];
    }
  }

  results.push(currentChunk);

  return results;
}

module.exports = chunk;
