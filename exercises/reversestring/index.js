// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

function reverse(str) {
  debugger;
  return str.split('').reduce((reversed, char) => char + reversed, '')
}

reverse('hoge');

// function reverse(str) {
//   let reversed = '';

//   for (c of str) {
//     reversed = c + reversed;
//   }

//   return reversed;
// }

// function reverse(str) {
//   const arr = str.split('')
//   return arr.map((_c, i) => {
//     return arr[arr.length - 1 - i]
//   }).join('')
// }

module.exports = reverse;
