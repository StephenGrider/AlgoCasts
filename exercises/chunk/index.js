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
    let chunkArray = [];
    let chunks = [];
    let count = 0;
    
    for (let i = 0; i < array.length; i++) {
        count++;
        chunks.push(array[i]);
        if (count >= size || i === array.length - 1) {
            chunkArray.push(chunks);
            chunks = [];
            count = 0;
        }
    }
    return chunkArray;
}

module.exports = chunk;
