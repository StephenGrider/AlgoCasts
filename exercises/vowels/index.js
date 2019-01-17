// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution - iterative
function vowels(str) {
  // place holder for storing data for runction return
  let count = 0;
  // array of data to check
  const checker = ['a', 'e', 'i', 'o', 'u'];
  // iterate through string
  for (let char of str.toLowercase()) {
    // use includes method in checker on characters in string
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

// Solution - regex match method
function vowels(str) {
  // will return an array or null
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
