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
    // const numArray = n.toString().split('');
    // let newNumber = ""
    // if (isNaN(numArray[0])) {
    //     newNumber += numArray[0];
    // }
    // for (let i = numArray.length - 1; i >= 0; i--) {
    //     if (!isNaN(numArray[i])) {
    //         newNumber += numArray[i];
    //     }
    // }
    // return parseInt(newNumber);
    const newNum = n.toString().split('').reduce((current, next) => next + current);
    return n < 0 ?  (0 - parseInt(newNum)) : parseInt(newNum);
}

console.log(reverseInt(-123));

module.exports = reverseInt;
