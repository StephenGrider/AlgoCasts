// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//  *** V1 ***
function pyramid(n, level = 1) { //3
    if (level > n) {
        return
    }
    console.log(' '.repeat(n - level) + '#'.repeat(2 * level - 1) + ' '.repeat(n - level))
    pyramid(n, level + 1)
}

//  *** V2 ***
function pyramid(n) { //3
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(2 * i - 1) + ' '.repeat(n - i))
    }
}

module.exports = pyramid;
