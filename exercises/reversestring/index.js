// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // let reversed = '';
  // let splitString = str.split('');
  // for (i = splitString.length -1; i >= 0; i--) {
  //   reversed += splitString[i];
  // }
  // return reversed;
  const rev = str.split('').reduce((acc, cur) => cur + acc);
  return rev;
}

module.exports = reverse;
