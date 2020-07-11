// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const stack = [];
  for (let char of str) {
    stack.push(char);
  }

  let reversedString = "";
  while (stack.length) {
    reversedString += stack.pop();
  }

  return reversedString;
}

module.exports = reverse;
