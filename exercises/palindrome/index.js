// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//******Answer 1******

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');

//     return reversed === str
// }





//******Answer 2******

// function palindrome(str) {
//     let reversed = ''

//     for (const character of str) {
//         reversed = character + reversed
//     }

//     if (reversed === str) {
//         return true
//     } else {
//         return false
//     }

// }




//******Answer 3******
// i = index and the first time it is called it equals 0
// second part of the second return statement is the mirrored other side of string
// -i makes sure we increment through every step of loop


function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1] 
    });
}

module.exports = palindrome;
