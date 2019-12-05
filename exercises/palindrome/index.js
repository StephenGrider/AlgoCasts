// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //Solution 1: Reverse the string and then check if the input string matches the reversed string
  /*let reversed = str.split("").reduce((reversed, char) => char + reversed, "");

  return str === reversed;
  */

  //Solution 2: Have a middle point and check opposite characters to see if they match
  const length = str.length;
  const middleIndex = length / 2;

  let i = 0;
  while (i < middleIndex) {
    if (str[i] !== str[length - i - 1]) return false;
    i++;
  }
  return true;
}

module.exports = palindrome;
