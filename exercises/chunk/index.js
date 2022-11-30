// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// need two parameters, array and size
// create a new array
// need to loop through array
// need to push elements into based on the size




const chunk = (array, size) => {
    const chunked = [];
    //using let because variable will change overtime
    let index = 0;
    while (index < array.length){
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}




// const array = [1,2,3,4,5,6]

// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         //logic to look at last element inside of our chunked array
//         const last = chunked[chunked.length - 1]
//         //for when we need a new chunk in chunked
//         if (!last || last.length === size) {
//             chunked.push([element])
//         } else {
//             //for when we have a chunk but it is not yet full
//             last.push(element);
//         }
//     }
//     return chunked;
// }

module.exports = chunk;
