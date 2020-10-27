// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   return str === str.split('').reverse().join('')
// }

function palindrome(str) {
  console.log(str)
  const word = str.split('')
  return str.split('').every((char, i) => {
    // console.log(i)
    // console.log(str.length)
    // console.log(str[str.length - 1 - i])
    // console.log(char)
    return (char === str[str.length - i - 1])
  })
}

module.exports = palindrome;
