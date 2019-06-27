// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Joe attempt
// function palindrome(str) {
//   return str.split("").reverse().join("") === str
// }

// Solution 1 same as Joe attempt

// Alt Solution
// not ideal, but can be good to talk about
// uses an advanced array helper
// once the program checks the first half of the input and the middle input
// it does not need to be checked further, it is redundent
function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1]
  })
}

module.exports = palindrome;
