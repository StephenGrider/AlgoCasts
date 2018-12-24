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
  const center = Math.floor((2 * n -1) / 2);

  for (let row = 0; row < n; row++) {
    let layer = '';
    for (let column = 0; column < 2 * n - 1; column ++) {
      if(column <= center + row && column >= center - row) {
        layer += '#';
      } else {
        layer += ' ';
      }
    }
    console.log(layer);
  }
}











// function pyramid(n) {
//   let center = Math.floor((2 * n -1) / 2);
//   for(let row = 0; row < n; row++) {
//     let level = '';
//     for(let column = 0; column < 2 * n - 1; column++) {

//       if (column <= center + row && column >= center - row) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }



// function pyramid(n, row = 0, level = '') {
//   const midpoint = Math.floor((n * 2 -1) / 2);
//   if(row === n) {
//     return;
//   }

//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     level += '#';
//   } else {
//     level += ' ';
//   }

//   if (level.length === 2 * n -1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   pyramid(n, row, level);
// }








// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < 2 * n -1; column++) {
//         if (midpoint - row <= column && midpoint + row >= column) {
//           level += '#';
//         } else {
//           level += ' '
//         }
//     }

//     console.log(level);
//   }
// }


// function pyramid(n, row = 0, level = '') {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   if(row === n) {
//     return;
//   };

//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     level += '#';
//   } else {
//     level += ' ';
//   }

//   if(level.length === 2 * n -1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }


//   return pyramid(n, row, level);
  
// }




module.exports = pyramid;
