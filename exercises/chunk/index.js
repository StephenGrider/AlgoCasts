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
    // let numOfChunks = Math.ceil(array.length/size)
    // if(numOfChunks === 1) return [array]
    // let innerArray = []

    let answer = []
    let index = 0

    // for (let i = 0; i < array.length; i++) {
    //     // if(i % size !== 0 || (i === 0 && size !== 1)){
    //     //     innerArray.push(array[i])
    //     //     console.log(size,innerArray)
    //     //     if(i === array.length -1 )answer.push(innerArray)
    //     // }else if(size === 1){
    //     //     innerArray.push(array[i])
    //     //     answer.push(innerArray)
    //     //     innerArray = []
    //     // }else{
    //     //     answer.push(innerArray)
    //     //     innerArray = []
    //     //     innerArray.push(array[i])
    //     // }


    //     // const last = answer[answer.length - 1]

    //     // if(!last || last.length === size){
    //     //     answer.push([array[i]])
    //     // } else {
    //     //     last.push(array[i])
    //     // }

    // }

    while (index < array.length) {
        answer.push(array.slice(index, index + size))
        index += size
    }

    return answer
}

module.exports = chunk;
