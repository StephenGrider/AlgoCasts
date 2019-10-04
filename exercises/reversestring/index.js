// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//create output variable which is empty string
//loop through string backwards
//concatenate each character to output string
//return output string

//O(n) runtime and O(1) space complexity

function reverse(str) {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
}

console.log(reverse("apple"));

module.exports = reverse;
