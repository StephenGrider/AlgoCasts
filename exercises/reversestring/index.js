// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Joe's attempt
// function reverse(str) {
//   let reversedString = []
//   let stringList = str.split("")
//
//   stringList.forEach(letter => {
//     reversedString.unshift(letter)
//   })
//   return reversedString.join("")
// }

// Solution 1
// function reverse(str) {
//   // const arr = str.split("")
//   // arr.reverse()
//   // return arr.join("")
//   return str.split("").reverse().join("")
// }

// Solution 2
function reverse(str) {
  let reversed = ''

  for (let character of str) {
    reversed = character + reversed
  }

  return reversed
}

module.exports = reverse;
