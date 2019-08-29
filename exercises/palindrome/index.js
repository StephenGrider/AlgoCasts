// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = str => {
  let arr = str.split("");
  if (arr.reverse().join("") === str) {
    return true;
  } else {
    return false;
  }
};

module.exports = palindrome;

// possible aternate solutions:

// const palindrome = str => {
// let reversed =
//   .split("")
//   .reverse()
//   .join("");

// return str === reversed;
// }


// const palindrome = str => {
  // let arr = 
// }