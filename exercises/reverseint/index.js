// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// num -> string -> array -> reverse -> string -> num
// if n is less than 0, take num and muliple by -1
// otherwise return reversed positive num

function reverseInt(n) {
  let reverse = parseInt(n.toString().split('').reverse().join(''))

  if (n < 0) {
    return reverse * -1
  }
  return reverse
}

module.exports = reverseInt;


// num -> string -> array -> reverse -> string -> num
// take reverse num and checks if num is pos or neg and multiplies it by 1 or -1

// function reverseInt(n) {
//   let reverse = parseInt(n.toString().split('').reverse().join(''))
//
//   return reverse * Math.sign(n)
// }

// OR

// function reverseInt(n) {
//   return (
//     parseInt(n.toString().split('').reverse().join(''))
//   ) * Math.sign(n)
// }
