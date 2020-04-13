// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    // solution #0
    // let reversed = ""

    // for (let character of str) {
    //     reversed = character + reversed
    // }

    // if (reversed === str) {
    //     return true
    // } else {
    //     return false
    // }

    // solution #1
    // const reversed = str.split('').reverse().join('')
    // return reversed === str

    // solution #2
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

module.exports = palindrome;
