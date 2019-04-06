// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = {};
    let max = 0;
    let maxChar = '';

    for(let char of str){
        obj[char] ? obj[char]++ : obj[char] = 1
    }

    for(let char in obj){
        if (obj[char] > max) {
            max = obj[char]
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;

// function isPrime(num){
//     for(let i=2; i<num; i++){
//         if(num % i === 0){
//         	return false
//     }
// }
// return true
// }
// function summationOfPrimes(num){
//     let sum = 2
//     for(let i=3; i<num; i++){
//         if(isPrime(i)){
//             sum += i
//         }
//     }
//     return sum
// }
// summationOfPrimes(2000000)