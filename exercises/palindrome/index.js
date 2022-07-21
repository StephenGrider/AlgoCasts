// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My Solution
function palindrome(str) {
    return str.split('').reverse().join('') === str;
}
module.exports = palindrome;

// Instructor Solution #1
// function palindrome(str) {
//    let myArr = str.split('');
//    myArr.every((char, i) => {
//      return char === str[str.length - i - 1];
//    });
//   
// }
