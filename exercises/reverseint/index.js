// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     return parseFloat(n .toString().split('').reverse().join('')) * Math.sign(n)
// }

function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('')
    
     return parseFloat(reversed) * Math.sign(n)
}
module.exports = reverseInt;
