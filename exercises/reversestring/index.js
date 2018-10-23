// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed
  , '')
}


module.exports = reverse;

// function reverse(str) {
//   let reversed = ''
//
//   for (let char of str) {
//     reversed = char + reversed
//   }
//
//   return reversed
// }

// function reverse(str) {
//   let arr = []
//   for(let i = 0; i < str.length; i++){
//     arr.push(str[i])
//   }
//   return arr.reverse().join('')
// }
