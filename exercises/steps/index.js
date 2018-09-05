// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1 - iterative
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    // iterate through each row
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    // inside of for loop for each row
    console.log(stair);
  }
}

// Solution 2 - recursive
function steps(n, row = 0, stair = '') {
  // require a base case to exit loop
  if (n === row) {
    return;
  }
  // end of row add one step
  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

// turnary expression
  // const add = stair.length <= row ? '#' : ' ';
  // steps(n, row, stair + add);
  
// if/else expression
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

module.exports = steps;
