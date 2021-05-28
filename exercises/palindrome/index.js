// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // create an empty string called reversed
    let reversed = '';

    // for each character in the provided string
    // take the character and add it to the start of reverse
    // JS adds things to the start
    for (let character of str) {
        reversed = character + reversed;
    }

    // return the variable reversed
    return str == reversed;
}

module.exports = palindrome;
