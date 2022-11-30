// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//*****Answer 1*******

// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('')
//     if (n < 0) {
//         return parseInt(reversed) * -1;
//     }
//     return parseInt(reversed)
// }





//****Answer 2****

// when you pass a positive number to .sign() it returns 1 when you pass a 
// negative number to .sign() it returns -1

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('')

    return parseInt(reversed)*Math.sign(n) 
}

module.exports = reverseInt;
