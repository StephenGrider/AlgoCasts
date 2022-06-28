// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let strObj = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (strObj[char]) {
            strObj[char]++;
        }
        else {
            strObj[char] = 1;
        }
}
    for (let char in strObj) {
        if (max < strObj[char]) {
            max = strObj[char];
            maxChar = char;
        }
    } 
    return maxChar;
}
module.exports = maxChar;
