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

function pyramid(n, row = 0, level = '') {
  const midpoint = Math.floor((n + (n - 1)) / 2);

  if (row === n) {
    return;
  }

  if (level.length === n + (n - 1)) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;

// function pyramid(n) {
//   const midpoint = Math.floor((n + (n - 1)) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < n + (n - 1); column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }
