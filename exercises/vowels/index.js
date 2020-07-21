// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  return vowelsRegex(str);
}

/**
 * This is the solution I wrote, and it's the 1st provided
 * solution as well.
 *
 * @param {*} str
 * @returns
 */
function vowelsMySolution(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
}

/**
 * Use regular expression to count the vowels.
 *
 * @param {*} str
 * @returns
 */
function vowelsRegex(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
