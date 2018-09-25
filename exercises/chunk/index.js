// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
chunk([1, 2, 3, 4], 2) // --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     const chunked = [];
//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
//         if (!last || last.length === size) {
//             chunked.push([element])
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }
// ******** V2 **********

function chunk(array, size) {
    // create empty 'chunked' array
    const chunked = [];
    // create 'i' start at 0
    let i = 0;
    // While i is less than array length
    while (i < array.length) {
        // push a slice of length 'size' from 'array' into 'chunked'
        chunked.push(array.slice(i, i + size))
        // add 'size' to 'index'
        i += size;
    }
    return chunked
}

module.exports = chunk;
