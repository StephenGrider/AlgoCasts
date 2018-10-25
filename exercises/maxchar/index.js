// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {}
  let count = 0
  let maxChar = ''

  // char indicates the individual letter vs the whole string
  for (let char of str) {
    if (obj[char]) {
      obj[char]++
    } else {
      obj[char] = 1
    }
  }

  for (let char in obj) {
    // if num if letters are bigger than prev
    if (obj[char] > count) {
      // the count stays at the biggest
      count = obj[char]
      // letter returned is the one with highest count
      maxChar = char
    }
  }
  return maxChar
}


module.exports = maxChar;

// ATTEMPT
// function maxChar(str) {
//   let obj = {}
//   for (var i = 0; i < str.length; i++) {
//     let char = str[i]
//     if (obj[char] === undefined) {
//       obj[char] = 0
//       debugger
//     }
//     obj[char]++
//   }
//   return obj
// }

// function maxChar(str) {
//   let obj = {}
//   let max = 0
//   let maxChar = ''
//
//   for (let char of str) {
//     if (obj[char]) {
//       obj[char]++
//     } else {
//       obj[char] = 1
//     }
//   }
//   for (let char in obj) {
//     if (obj[char] > max) {
//       max = obj[char]
//       maxChar = char
//     }
//   }
//   debugger
//   return maxChar
// }
