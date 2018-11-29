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





function steps(n) {

  for (let row = 0; row < n; row++) {
    let step = "";

    for(let column = 0; column < n; column++) {
      if (column <= row) {
        step += "#"
      } else {
        step += " ";
      }
    }
    console.log(step)
  }
}























// function steps(n, row = 0, stair = '') {
//   if(row === n) {
//     return;
//   }

//   if(stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   }

//   if(stair.length === n) {
//     console.log(stair)
//     return steps(n, row + 1);
//   }

//   steps(n, row, stair);
// }




// function steps(n) {
  
//   for(let row = 0; row < n; row++) {
//      let step = '';

//      for(let column = 0; column < n; column++) {

//         if (column <= row) {
//           step += '#';
//         } else {
//           step += ' ';
//         }
//      }
//      console.log(step);
//   }
// }












module.exports = steps;












// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let step = '';
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         step += '#';
//       } else {
//         step += ' '
//       }
//     }
// console.log(step);

// }
// }

// function steps(n, row = 0, stair = '') {
//   if (row === n) {
//     return;
//   };

//   if (stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   };

//   if (n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   };

//   steps(n, row, stair);
// }
    