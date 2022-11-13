// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution 1
// function palindrome(str) {
//     return str === str.split("").reverse().join("")
// }

// solution 2
// const palindrome = (str) => {
//     let reversed = "";
//     for (let char of str) {
//     reversed = char + reversed
//     }
//     return str === reversed;
// }

// solution 3
// const palindrome = (str) => {
//     const reversed = str.split("").reduce((prev, curr) => {
//         return curr + prev
//     }, "")
//     return str === reversed
// }

// "|a|b|c|d|e|f|g|"
//   0           arr.length - 0 -1

//solution 4 (with .every())
// const palindrome = (str) => {
//     return str.split("").every((v, i) => {
//         return v === str[str.length - i - 1]
//     })
// }

const palindrome = (str) => {
    return str.split("").every((v, i) => v === str[str.length - i - 1])
}

module.exports = palindrome;
