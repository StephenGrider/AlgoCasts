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
  // let newArr = [];
  // while(array.length > 0) {
  //   let tempArr = array.splice(0, size);
  //   newArr.push(tempArr)
  // }
  // return newArr;

  // const chunked = []; 
  // let index = 0 
  // while (index < array.length) {
  //   chunked.push(array.slice(index, index + size))
  //   index += size; 
  // }
  // return chunked;

  const chunked = []; 
  for(let el of array) {
    let lastChunk = chunked[chunked.length -1]
    if(!lastChunk || lastChunk.length === size) {
      chunked.push([el]);
    }else {
      lastChunk.push(el)
    }
  }
  return chunked;
}
// chunk([1,2,3,4,5], 3)
module.exports = chunk;
