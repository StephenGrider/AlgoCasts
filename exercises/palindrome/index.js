// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {
  const reversed = str.split('').reverse().join('')
  return reversed === str
}

module.exports = palindrome;

// function palindrome(str) {
//   let reversed = ''
//
//   for (let char of str) {
//     reversed = char + reversed
//   }
//
//   // if (reversed === str){
//   //   return true
//   // }
//   return reversed === str // auto boolean
// }

// not ideal, but uses array helper (takes twice as long)
// function palindrome(str) {
//   return  str.split('').every((char, i) => {
//     return char === str[str.length -i - 1]
//   })
// }
