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

// function pyramid(n, row = 0, stair = '') {
//   if (row === n) {
//     return
//   }
//   if (stair.length === 2 * n - 1) {
//     console.log(stair)
//     return pyramid(n, row + 1)
//   }
//   const middle = Math.floor((2 * n - 1) / 2)
//   let add
//   if (middle - row <= stair.length && middle + row >= stair.length) {
//     add = '#'
//   } else {
//     add = ' '
//   }
//   pyramid(n, row, stair + add)
// }

function pyramid(n) {
  const mid = Math.floor((2 * n - 1) / 2)
  for (let i = 0; i < n; i++) {
    let level = ''
    for (let j = 0; j < 2 * n - 1; j++) {
      if (mid - i <= j && mid + i >= j) {
        level += '#'
      } else {
        level += ' '
      }
    }
    console.log(level)
  }
}

module.exports = pyramid
