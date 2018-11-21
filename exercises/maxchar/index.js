// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let chars = {};
//   for(const char of str) {
//     chars[char] = chars[char] + 1 || 1;
//   }
//   let result = Object.keys(chars)[0];
//   Object.keys(chars).forEach(char => {
//     if(chars[char] > chars[result]) {
//       result = char;
//     }
//   })
//   return result;
// }

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  for(const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  
  for(let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
