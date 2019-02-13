// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed ="";
  for (let index = 0; index < str.length; index++) {
    reversed = `${str[index]}${reversed}`   
  }
  // STEPHENS CODE
// const reversed =str.split('')
// reversed.reverse()
// return reversed.join('')
return reversed
}

module.exports = reverse;
