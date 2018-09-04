// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 1
function capitalize(str) {
  // placeholder for new words
 const words = [];
  // iterate through and split on space
 for (let word of str.split(' ')) {
   // push new words with cap fist letter sliced from word to array
  words.push(word[0].toUpperCase() + word.slice(1));
 }
 // return rejoined words
 return words.join(' ');
}

// Solution 2
function capitalize(str) {
  let result = '';
  for () {
    if () {

    } else {
      
    }
  }
}

module.exports = capitalize;
