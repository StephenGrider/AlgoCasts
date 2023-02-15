// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").every((char, index) => {
    // splits the string into an array here
    return char === str[str.length - index - 1];
  });
}

// function palindrome(str) {
//     // Solution 1
//     const reversed = str.split("").reduce((rev, char) => char + rev, "");
//     if (reversed === str) {
//       return true;
//     } else {
//       return false;
//     }
// }
module.exports = palindrome;
