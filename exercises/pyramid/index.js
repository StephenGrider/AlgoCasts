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

function pyramid(n, row = 0, level = "") {
  //Solution 1: Iterative
  /*const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < 2 * n - 1; column++) {
      //find the range where we should add a pound sign
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
  */

  //Solution 2: use recursion
  //base case: if we have passed the last row then we simply return
  if (n === row) {
    return;
  }

  const columns = 2 * n - 1;
  //if we are the end of a column, then we print the current level and then go to the next row
  if (columns === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const currentCol = level.length;
  const midpoint = Math.floor((2 * n - 1) / 2);
  //check if the currentCol falls within the range we want to add #'s to
  if (midpoint - row <= currentCol && midpoint + row >= currentCol) {
    level += "#";
  } else {
    level += " ";
  }
  return pyramid(n, row, level);
}

module.exports = pyramid;
