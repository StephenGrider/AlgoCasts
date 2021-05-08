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

function steps(n, row = 0, stair = '') {
  // for(let i = 1; i <= n; i ++) {
    // let stepChars = "#".repeat(i) + " ".repeat(n - i);
    // console.log(stepChars);
    // let stair = ""; 
    // for (let j = 1; j <= n; j++ ) {
      // if(j <= i) {
      //   stair += "#";
      // }else {
      //   stair += " ";
      // }
      // (j <= i) ? stair += "#" : stair += " ";
    // }
  //   console.log(stair);
  // }

  if (row === n) {
    return; 
  }

  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1)
  }

  if (stair.length <= row) {
    stair += "#"; 
  }else {
    stair += " ";
  }

  steps(n, row, stair)
}

module.exports = steps;
