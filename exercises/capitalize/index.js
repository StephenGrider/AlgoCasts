// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//set index to 0
//while index < string.length
//if index is space then capitalize at index+1 and move forward 2
//otherwise move forward 1
//return the string

function capitalize(str) {
  let index = 1;
  let output = str[0].toUpperCase();

  while (index < str.length) {
    if (str[index] === " ") {
      output += str[index];
      output += str[index + 1].toUpperCase();
      index += 2;
    } else {
      output += str[index];
      index += 1;
    }
  }
  return output;
}

console.log(capitalize("a short sentence"));

//O(n) runtime O(1) space complexity

module.exports = capitalize;
