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
  //Solution 1: use the slice method and a for loop
  /* let chunks = [];
  for (let i = 0; i < array.length; i += size) {
    const subarray = array.slice(i, i + size);
    //chunks.push(subarray);
    //Use the spread operator to add the subarrays into an array
    chunks = [...chunks, subarray];
  }
  return chunks;
  */

  //Solution 2: Use the while loop
  /*let chunks = [];

  let currIndex = 0;
  while (currIndex < array.length) {
    const subarray = array.slice(currIndex, currIndex + size);
    chunks = [...chunks, subarray];
    currIndex += size;
  }
  return chunks;
  */

  //Solution 3: Transform solution 2 into a recursive method
  let chunks = [];
  const subarray = array.slice(0, size);
  chunks.push(subarray);
  //get the rest of the values
  const rest = array.slice(size, array.length);
  if (rest.length > 0) {
    chunks = [...chunks, ...chunk(rest, size)];
    //call chunks again
  }
  return chunks;

  //Solution 3: Use the forEach method
  /*let chunked = [];
  array.forEach(value => {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked = [...chunked, [value]];
      //chunked.push([value]);
    } else {
      //[...last, value]; 
      last.push(value);
    }
  });
  return chunked;
  */
}

module.exports = chunk;
