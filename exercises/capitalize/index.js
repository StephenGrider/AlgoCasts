// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = str => {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
};

module.exports = capitalize;

// ------------------------------------//

// this is another solution to this problem //
//const capitalize = str => {
//  let result = str[0].toUpperCase();
//
//  for (let i = 1; i < str.length; i++) {
//  if (str[i-] === " ") {
//  result += str[i].toUpperCase();
// } else {
//   result += str[i];
//}
//}
// return result;
//}

//with this you are going to be looking to the left of a character and if it is a space then we are going to capitalize that character on the right
//to handle the fist letter of the string we are going to take str[0] and capitalize it first
