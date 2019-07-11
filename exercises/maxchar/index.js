// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// Joe attempt
// function maxChar(str) {
//   let chars = {}
//
//   str.split("").forEach(char => {
//     if (!chars[char]) {
//       chars[char] = 1
//     } else {
//       chars[char] = chars[char] + 1
//     }
//   })
//
//   let highestCount = -1
//   let mostFrequentChar = ""
//
//   Object.keys(chars).map((key) => {
//     if (chars[key] > highestCount){
//       highestCount = chars[key]
//       mostFrequentChar = key
//     }
//   })
//
//   return mostFrequentChar
// }

// Solution

function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar;
