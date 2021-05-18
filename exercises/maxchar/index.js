// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0; 
  let maxChar =str[0];
  let charMap = {};
  for ( let char of str) {
    // if (charMap[char]) {
    //   charMap[char] += 1 ;
    // } else {
    //   charMap[char] = 1;
    // }

    // if (charMap[char] > max) {
      //   max = charMap[char];
      //   maxChar = char;
      // }
      
    charMap[char] = charMap[char] + 1 || 1

    for (obj in charMap) {
      if (charMap[obj] > max) {
        max = charMap[obj]; 
        maxChar = obj;
      }
    }
  }
  return maxChar;
}

maxChar("aabbccc");

module.exports = maxChar;
