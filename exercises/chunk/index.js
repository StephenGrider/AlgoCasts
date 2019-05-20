// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
let newArr = [];
function chunk(array, size) {
    if(!array.length){ //base case
        let pushedArr = newArr;
        newArr = []; //resets global var to empty arr
        return pushedArr;
    }
    if(array.length){
        newArr.push(array.splice(0, size));
        return chunk(array, size);
    }

}

/*
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index  < array.length) {
        chunked.push(array.slice(index, index + slice));
        index += size;
    }
    return chunked;
}





*/

module.exports = chunk;
