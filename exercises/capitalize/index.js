// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   const splitString = str.split(' ')
//   const newSentence = [];
//   splitString.forEach(word => {
//     let newWord = [];
//     for(let i = 0; i < word.length; i++) {
//       if(i === 0) {
//         newWord.push(word[i].toUpperCase())
//       } else {
//         newWord.push(word[i]);
//       }
//     }
//     newSentence.push(newWord.join(''))
//   })
//   return newSentence.join(' ')
// }

function capitalize(str) {
  return str.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ');
}

module.exports = capitalize;
