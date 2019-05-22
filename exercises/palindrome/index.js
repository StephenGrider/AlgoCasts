// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  var reverse = str.split('').reverse().join('');
  return str === reverse;

  // The lesson had something else, the array 'every()' function
  // Seemed too complicated compared to above
}

module.exports = palindrome;
