// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// this versions uses reduce, which takes the empty string and passes it into the callback as the first argument.

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '')
}

// this is a perfectly acceptable answer. it uses the new ES6 "for - of" syntax instead of a standard for-loop.

// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed
//   }
//   return reversed
// }



// this is the 'cheater' method and won't be allowed as an answer on most interviews!

// function reverse(str) {
//   return str.split('').reverse().join('');
// }



module.exports = reverse;
