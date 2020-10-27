// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const word = str.split('')
//   let palindrom = ''
//   for (let character of str) {
//     palindrom = character + palindrom
//   }
//   return palindrom
// }

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '')
}

module.exports = reverse;
