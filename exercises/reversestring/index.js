// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// See MDN Array.prototype.reverse() documentation
function reverse(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}

module.exports = reverse;


// Solution 2
// function reverse(str) {}

// module.exports = reverse;