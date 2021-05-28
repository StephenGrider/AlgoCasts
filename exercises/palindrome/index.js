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

    // you could reverse the string with this one-liner
    // and continue with the comparison
    // return str == rev
    const rev = str
        // splitting the string one by one into an array
        .split('')
        // reversing the array
        .reverse()
        // joining back the array together as a string
        .join('');

    // return the bool of str == reversed
    return str == reversed;


    // approach with usage of every() helper
    // [0, 10, 14] is every value greater than 5?
    // array.every((val) => val > 5);

    // check the if first item of the array is equal to the last
    // repeat
}

module.exports = palindrome;
