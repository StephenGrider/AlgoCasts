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
  let chunks = []; 
  if (array.length === 0) return chunks;
  let pointer = 0;
  while(pointer < array.length){
    let subArray = array.slice(pointer, pointer+size);
      chunks = [...chunks, subArray];
      pointer+=size
  }
  return chunks;

//chunks.push([0,1]),
//rest = [3,4,5]
//rest > 0 
//return chunks = [...[[0,1]], ...chunk([3,4,5], 2); -> [[0,1], [3,4], [5]]

//chunk([3,4,5], 2)
//chunks = []
//chunks.push([3,4])
//rest = [5]
//rest > 0
// return chunks = [...[[3,4]], ...chunks([5], 2)] -> [[3,4], [5]]

//chunks([5], 2)
//chunks.push([5])
//rest = [];
//rest = 0
// return [[5]]
/*
  let chunks = [];
  chunks.push(array.slice(0,size));
  // Get an array of the remaining values
  const rest = array.slice(size, array.length);
  if (rest.length > 0) {
    chunks = [...chunks, ...chunk(rest, size)];
  }
  return chunks;
  */
}

module.exports = chunk;
