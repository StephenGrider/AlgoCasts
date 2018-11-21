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
//   const negPosCheck = Math.sign(n);
//   switch(negPosCheck) {
//     case 0:
//       return 0;
//       break;
//     case 1: 
//       return parseInt(n.toString().split('').reverse().join(''));
//       break;
//     case -1:
//       return -(parseInt(n.toString().split('').reverse().join('')));
//   }
// }

function reverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;
