// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let counter = 0; 
  // const dictionary = ['a','e','i','o','u']
  // for (char of str.toLowerCase()) {
    // dictionary.forEach(el => {
    //   if (char === el) {
    //     counter += 1;
    //   }
    // })

    // if (dictionary.includes(char)) {
    //   counter += 1;
    // }

    // if (char.match(/[aeiou]/)) {
    //   counter += 1;
    // }
  // }
  // return counter;

  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

module.exports = vowels;
