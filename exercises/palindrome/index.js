// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let reversedString = str
    .split('')
    .reverse()
    .join('');
  return reversedString === str;
}

module.exports = palindrome;

function palindrome(str) {
  let reversedString = '';

  for (let character of str) {
    reversedString = character + reversedString;
  }
  return reversedString === str;
}

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
