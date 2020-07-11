// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return palindromeMySolution(str);
}

/**
 * My solution using two pointers.
 *
 * @param {*} str
 * @returns
 */
function palindromeMySolution(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left++] !== str[right--]) {
      return false;
    }
  }

  return true;
}

/**
 * Provided most straightforward solution.
 *
 * @param {*} str
 * @returns
 */
function palindromeProvidedSolution(str) {
  const reversed = str.split("").reverse().join("");

  return reversed === str;
}

/**
 * Provided solution #2.
 *
 * This is still not an idea solution, as we should only need to check
 * half of the entire string, while this solution check the entire one.
 *
 * @param {*} str
 */
function palindromeUsingEvery(str) {
  str.split("").every((char, i) => char === str[str.length - i - 1]);
}
module.exports = palindrome;
