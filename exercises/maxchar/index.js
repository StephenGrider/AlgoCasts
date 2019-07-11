// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// Joe attempt
function maxChar(str) {
  let chars = {}

  str.split("").forEach(char => {
    if (!chars[char]) {
      chars[char] = 1
    } else {
      chars[char] = chars[char] + 1
    }
  })

  let highestCount = -1
  let mostFrequentChar = ""

  Object.keys(chars).map((key) => {
    if (chars[key] > highestCount){
      highestCount = chars[key]
      mostFrequentChar = key
    }
  })

  return mostFrequentChar
}

module.exports = maxChar;
