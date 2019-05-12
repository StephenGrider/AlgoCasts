// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let splitStr = str.split('');
  let reverseStr = splitStr.reverse();
  let joinStrBack = reverseStr.join('');

  return joinStrBack;
}

module.exports = reverse;
