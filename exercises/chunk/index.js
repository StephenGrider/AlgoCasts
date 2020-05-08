// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// NOTE: slice approach
function chunk(array, size) {
  const output =[]
  let index = 0;

  while (index < array.length) {
    output.push(array.slice(index, index + size))
    index+=size
  }

  // for (let i = 0; i < array.length; i) {
  //   output.push(array.slice(i, i + size))
  //   i+=size
  // }

  // array.forEach((e, i) => {
  //   if (i % size === 0) {
  //     output.push(array.slice(i, i + size))
  //   }
  // })

  return output
}

// function chunk(array, size) {
//   let output = [];
//   let tmp = [];

//   array.forEach((n) => {
//     if (tmp.length === size) {
//       output.push([...tmp])
//       tmp = []
//     }
//     tmp.push(n)
//   })

//   if (tmp.length > 0) output.push([...tmp])

//   return output
// }

module.exports = chunk;
