// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// my original solution
function reverseInt(n) {
  const numSign = Math.sign(n)
  let numString =  Math.abs(n).toString().split('').reverse().join('')
  if (numSign === -1) {
    numString = "-" + numString
  }
  return Number(numString)
}

// alternate solution
// function reverseInt(n) {
//   let numString =  Math.abs(n).toString().split('').reverse().join('')
//   return Number(numString) * Math.sign(n)
// }


module.exports = reverseInt;
