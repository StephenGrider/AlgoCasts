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

function steps(n, row = 0, stair = "") {
  // find the base case

  if (n === row) {
    return;
  }

  // find the end
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  //
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

console.log(steps(4));
// Solution 1:
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//       let str = "";
//       for (let col = 0; col < n; col++) {
//         if (col <= row) {
//           str += "#";
//         } else {
//           str += " ";
//         }
//       }
//       console.log(str);
//     }
//   }
// }

module.exports = steps;
