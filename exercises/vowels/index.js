// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // regx solution

  // if matches() finds a match it returns an array with any matches found else it returns null
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// solution 1
// function vowels(str) {
//     let count = 0;
//     const checker = 'aeiou';

//     for (let char of str.toLowerCase()) {
//       if (checker.includes(char)) {
//         count++;
//       }
//     }
//     return count;
//   }

// my solution
// function vowels(str) {
//     const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//       for (let vowel of vowelsArr) {
//         if (char === vowel) {
//           count++;
//         }
//       }
//     }
//     return count;
//   }
