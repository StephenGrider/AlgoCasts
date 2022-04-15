// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // let reverse = "";
    // str.split('').reduce((previous, current) => reverse = current + previous);
    // return str === reverse;
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reverse += str.charAt(i);
    // }
    // return str === reverse;
    const reverse = str.split('').reverse().join('');
    return str === reverse;
}


module.exports = palindrome;
