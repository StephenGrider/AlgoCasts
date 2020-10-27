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

// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     let word = ''
//     const mid = Math.floor((2 * n - 1) / 2)
//     for (let column = 0; column < (2 * n - 1); column++) {
//       if (column >= mid - row && column <= mid + row) {
//         word += '#'
//       } else {
//         word += ' '
//       }
//     }
//     console.log(word)
//   }
// }

function pyramid(n, limit = 0, word = '') {
  const mid = Math.floor((2 * n - 1) / 2)
  if (limit === n){
    return
  }

  if (word.length === ( 2 * n - 1)) {
    console.log(word)
    return pyramid(n, limit + 1)
  }

  if (word.length >= mid - limit && word.length <= mid + limit) {
    word+= '#'
  } else {
    word+= ' '
  }
  pyramid(n, limit, word)
}

module.exports = pyramid;
