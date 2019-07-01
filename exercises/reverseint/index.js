// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let negativeFactor = 1
  if (n < 0) {
    n = n * -1
    negativeFactor = -1
  }
  let stringifiedInt = n.toString()
  return parseInt(stringifiedInt.split("").reverse().join("") ) * negativeFactor
}

module.exports = reverseInt;
