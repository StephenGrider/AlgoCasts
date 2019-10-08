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

function pyramid(n) {
  let length = n * 2 - 1;
  let midpoint = Math.floor(length / 2);
  let level = 0;

  while (level < n) {
    let output = "";
    for (let column = 0; column < length; column++) {
      if (column === midpoint) {
        output += "#";
      } else if (column >= midpoint - level && column <= midpoint + level) {
        output += "#";
      } else {
        output += " ";
      }
    }

    console.log(output);
    level++;
  }
}

console.log(pyramid(3));

module.exports = pyramid;
