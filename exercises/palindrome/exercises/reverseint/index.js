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
    return n === 0 ? 0 :
    n < 0 ? -Math.abs(n).toString().split('').reverse().join('') :
    +(n.toString().split('').reverse().join(''))
}


module.exports = reverseInt;
