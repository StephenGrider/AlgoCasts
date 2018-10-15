// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let arr = []
  for(let i = 0; i < str.length; i++){
    arr.push(str[i])
  }
  return arr.reverse().join('')
}

module.exports = reverse;
