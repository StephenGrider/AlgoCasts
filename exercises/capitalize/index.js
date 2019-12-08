// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //Solution 1: Use slice method and toUpperCase function
  const capitalized = str.split(" ").map(word => {
    const firstLetter = word[0].toUpperCase();
    const rest = word.slice(1);
    return firstLetter + rest;
  });
  return capitalized.join(" ");
}

module.exports = capitalize;
