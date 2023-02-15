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
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);

  // convert the interger to a string first by using the the toString() array method
  // convvert the string to an array by using the split('') method
  // reverse the elements of the array and jpoin them back to a string
  //parseInt(n) takes in the reversed string and turns it to an integer
  // Math.sign() helps us with the sign of the integer
}

module.exports = reverseInt;
