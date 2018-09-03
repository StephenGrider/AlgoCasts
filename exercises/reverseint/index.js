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
    const reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n)
}

// ***********************************

function reverseInt(n) {
    if (n < 0) {
        n = Math.abs(n).toString().split('').reverse().join('');
        return -Number(n);
    } else {
        n = n.toString().split('').reverse().join('');
        return Number(n);
    }
}

// ********************************

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');

    if (n < 0) {
        return parseInt(reversed) * -1;
    }

    return parseInt(reversed)
}

module.exports = reverseInt;
