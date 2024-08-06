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
    
    // create an array as result 
    
    let result = [];
    let count = 1;
    let subArray = [];
    
    //traverse through array
    
    for(let i = 0; i < array.length; i++) {
        //2 % 3 !== 0
       if(count % (size + 1) !== 0){ //[5]
           subArray.push(array[i])
           console.log(subArray)
           count++;
           console.log(count)
       }
       else{
           result.push(subArray) //[[1,2],[3,4]]
           subArray = []
           count = 1
           subArray.push(array[i])
           count++
       }
    }
    
    result.push(subArray)
    
    return result
    
    //determin the max array based off the size
    
    //insert into the result array
    
}

chunk([1,2,3,4,5], 2)


module.exports = chunk;
