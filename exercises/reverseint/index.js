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

    // converting n into string then reversing
    // still a string
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');

    // parseInt() convert reversed back into int, '5' -> 5
    // it will always be positive tho, '5-' -> 5 

    // by multiplying the sign of n to parseInt(reversed)
    // if n is positive, it will return positive value
    // if n is negative, it will return negative value
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
