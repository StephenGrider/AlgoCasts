// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false



// ==========================================================
function palindrome(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1]
	})
}




// ==========================================================
// function palindrome(str) {
// 	for (i = 0; i < str.length / 2; i++) {
// 		if (str[i] != str[str.length - (1 + i)]) {
// 			return false
// 		} else {
// 			return true
// 		}
// 	}
// }
// Test Suites: 1 passed, 1 total
// Tests:       8 passed, 8 total
// Snapshots:   0 total
// Time:        0.645s, estimated 1s
// Ran all test suites matching /palindrome/i.

// ==========================================================
// function palindrome(str) {
// 	for (i = 0; i < str.length; i++) {
// 		if (str[i] != str[str.length - (1 + i)]) {
// 			return false
// 		} else {
// 			return true
// 		}
// 	}
// }
// Test Suites: 1 passed, 1 total
// Tests:       8 passed, 8 total
// Snapshots:   0 total
// Time:        0.646s, estimated 1s
// Ran all test suites matching /palindrome/i.

// ==========================================================
// function palindrome(str) {
// 	// return str.split('').reverse().join(',') === str.split('').join(',')
// 	return str.split('').reverse().join('') === str
// }
// Test Suites: 1 passed, 1 total
// Tests:       8 passed, 8 total
// Snapshots:   0 total
// Time:        0.655s, estimated 1s
// Ran all test suites matching /palindrome/i.
// ==========================================================

module.exports = palindrome;
