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
//       '###'  ~ Q`
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//n=4;
//row = 0;
//string = ''

//string.length = 0

function steps(n, row = 0, stair = "") {
  //Solution 1: iterative
  /*for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }*/

  //Solution 2: Use recursion
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  //Could use ternirary operator to refactor
  //const add = tair.length <= row ? "#" : " ";
  //steps(n, row, stair + add);

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

module.exports = steps;
