// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let charArr = str.split(' ');
  let newArr = [];
  for (char of charArr) {
    newArr.push(char[0].toUpperCase() + char.slice(1))
  }
  return newArr.join(' ');
}

module.exports = capitalize;
