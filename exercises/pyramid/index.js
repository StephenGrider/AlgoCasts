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

function pyramid(n, row = 0, pStr='') {
  // const midPoint = Math.floor((2*n - 1)/2);
  // for (row = 0; row < n; row ++) {
  //   let pyramidStr = '';
  //   for ( col = 0; col < (2*n - 1); col ++) {
  //     if (col > midPoint + row || col < midPoint - row) {
  //       pyramidStr += ' ';
  //     }else {
  //       pyramidStr += "#";
  //     }
  //   }
  //   console.log(pyramidStr);
  // }

  if (row === n) {
    return;
  }

  if (pStr.length === 2*n -1) {
    console.log(pStr); 
    return pyramid(n, row+1)
  }

  if (pStr.length > Math.floor((2*n-1)/2) + row || pStr.length < Math.floor((2*n-1)/2) - row) {
      pStr += ' ';
    }else {
      pStr += "#";
    }
  pyramid(n, row, pStr)
}

module.exports = pyramid;
