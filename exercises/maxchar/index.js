// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   let numSet = new Set();
   let maxKey;
   let max = 0;

 let arr = str.split('')

 for(let i = 0; i < arr.length ; i++){
    if(arr[i] in numSet) {
        numSet[arr[i]] += 1
       max = Math.max(max, numSet[arr[i]])
    }
    else{
        numSet[arr[i]] = 1
       max = Math.max(max, numSet[arr[i]])
    }
    
        if (numSet[arr[i]] == max){
            maxKey = arr[i]
        }
 }

return maxKey

    

}

maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"
module.exports = maxChar;
