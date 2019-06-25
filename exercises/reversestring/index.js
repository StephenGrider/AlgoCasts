// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedString = []
  let stringList = str.split("")

  stringList.forEach(letter => {
    reversedString.unshift(letter)
  })
  return reversedString.join("")
}

module.exports = reverse;
