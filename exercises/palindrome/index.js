// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');

//   return str === reversed; // if str === reversed it will return true
// }

// Solution 2 (every array helper)
function palindrome(str) {
  // turn str into array with 'every helper'
  return str.split('').every((character, index) => {
    // check each character in str against opposit in array with -1
    return character === str[str.length - index -1]; 
  });
}

module.exports = palindrome;
