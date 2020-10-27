// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {}
  let max = 0
  let maxChar = ''
  
  for (let character of str) {
    obj[character] = obj[character] + 1 || 1

    if (obj[character] > max) {
      max = obj[character]
      maxChar = character
    }
  }
  return maxChar
}

module.exports = maxChar;
