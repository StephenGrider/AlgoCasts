// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const arr = str.split('');
  return arr.every((char, i) => {
    return char === arr[arr.length - i - 1]
  })
}

// function palindrome(str) {
//   const arr = str.split('');
//   const reversed = arr.reverse();
//   return reversed.join('') === str;
// }

// function palindrome(str) {
//   const reversed = str.split('').reduce((rev, char) => char + rev, '');
//   return reversed === str;
// }

module.exports = palindrome;
