// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My solution
function reverseInt(n) {
    let numArr = n.toString().split('');

    if (numArr[0] == '-') {
        numArr.shift();
        return parseInt(numArr.reverse().join('')) * -1;
    }

    return parseInt(numArr.reverse().join(''));
}

module.exports = reverseInt;

// Instructor Solution
// function reverseInt(n) {
//     const reversed = n
//         .toString()
//         .split('')
//         .reverse()
//         .join('');

//     return parseInt(reversed) * Math.sign(n);
// }
