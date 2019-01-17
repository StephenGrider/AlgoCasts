// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution 1
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // map characters in a string
  for (let char of str) { // for in syntax
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1
    }
  }
  // console.log(charMap);

  // update maxChar
  for (let char in charMap) { // for in syntax for direct object of charMap
    if (charMap[char] > max) {
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
