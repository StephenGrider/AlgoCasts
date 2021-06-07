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
    // create empty array to hold chunks called chunked
    // for each element in the "unchunked" array
        // retrieve the last element in 'chunked'
        // if last element does not exists, or if its length is equal to chunk size
            // push a new chunk into 'chunked' with the current element
        // else add the current element into the chunk
    
    // array that holds different chunked data
    // eg. [[1,2],[3,4],[5]]
    // const chunked = [];

    // for (let element of array) {

    //     // checking for the last element in chunked
    //     // chunked = [chunked[0], chunked[1]]
    //     // chunked = []
    //     const last = chunked[chunked.length - 1];

    //     // if last does not exist
    //     // or the length of the last chunked piece is equal to size
    //     if (!last || last.length === size) {
    //         // push a new element into a chunk
    //         chunked.push([element]);
    //     } else {
    //         // push the element into last 
    //         last.push(element);
    //     }
    // }
    // return chunked;

    // Create empty 'chunked' array
    const chunked = [];

    // Create 'index' start at 0
    // since this variable will change over time
    let index = 0;

    // while index is less than array.length
    while(index < array.length) {
        // push a slice of length 'size' from 'array' into 'chunked'
        chunked.push(array.slice(index, index + size));
        // add 'size' to 'index'
        index += size;
    }

    return chunked
}

module.exports = chunk;
