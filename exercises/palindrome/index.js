// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*
Alternate solution: Not an ideal solution since it's twice as much work. 

every array helper:

every() does a boolean check on a condition. If there is any false checks, it will return false. If all checks are true, it will return true

function palindrome(str){
    return str.split('').every((char, index) => {
        return char[index] === str[str.length - index - 1];
    });
    
}



*/

function palindrome(str) {
    let reversed = str.split('').reverse('').join('');
    return str === reversed;
}
    
module.exports = palindrome;
