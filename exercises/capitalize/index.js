// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const word = str.split(' ')
  const newWord = []
  for (let string of word) {
    newWord.push(string[0].toUpperCase() + string.slice(1))
  }
  return newWord.join(' ')
}

module.exports = capitalize;
