// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxChar = '';

  // for of iterates through an array or string
  for (let i of str) {
    if (charMap[i]){
      charMap[i] + 1
    } else {
      charMap[i] = 1
    }
  }

  // to iterate through an object we use
  // for in syntax
  for (let i in charMap) {
    if (charMap[i] > max){
      max = charMap[i]
      maxChar = i
    }
  }

}

module.exports = maxChar;
