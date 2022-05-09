// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    for (let i = 0; i < str.length/2 ; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            console.log('false')
            return false;
        }
    }
    console.log('true')
    return true;

}

//module.exports = palindrome("Fish hsiF");
module.exports = palindrome;
