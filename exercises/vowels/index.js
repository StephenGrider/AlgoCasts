// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   const word = str.toLowerCase().split('')
//   let charObj = {}
//   let vowel = ['a', 'i', 'u', 'e', 'o']
//   let finalTest = 0
//   for (let char of word) {
//     charObj[char] = charObj[char] + 1 || 1
//   }
//   for (let vow of vowel) {
//     finalTest+= (charObj[vow] ? (charObj[vow]) : 0)
//   }
//   return finalTest
// }

// function vowels(str) {
//   const word = str.toLowerCase().split('')
//   let vowel = ['a', 'i', 'u', 'e', 'o']
//   let finalTest = 0
//   for (let char of word) {
//     if (vowel.includes(char)) {
//       finalTest++
//     }
//   }

//   return finalTest
// }

function vowels(str) {
  const matches = str.match(/[aiueo]/gi)
  return matches ? matches.length : 0
}

module.exports = vowels;
