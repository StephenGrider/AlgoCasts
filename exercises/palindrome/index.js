// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome (str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// function palindrome (str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }


// function palindrome (str) {
//   return str.split('').every((character, i) => character === str[str.length - 1 - i]);
// }

function palindrome (str) {
  const theFirstHalfOfTheString = str.slice(0, Math.floor(str.length / 2));
  return theFirstHalfOfTheString.split('').every((character, i) => character === str[str.length - 1 - i]);
}

module.exports = palindrome;