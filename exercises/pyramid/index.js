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

function pyramid(n, row=0, level='') {
  if(row === n){
    return; 
  }
  //if we are at the end of the column then we console log
  //and go to the next row by calling pyramid again
  let numOfCols = 2 * n - 1;
  if (level.length === numOfCols){
    console.log(level);
    return pyramid(n, row+1);
  }
  let middlePoint = Math.floor(numOfCols/2);
  let currentCol = level.length;
  if ((currentCol >= (middlePoint-row)) && (currentCol <= (middlePoint+row))){
    level+='#';
  }
  else {
    level+=' ';
  }
  pyramid(n, row, level);  
} 
  /* Solution 1: Iterative solution
  let numOfCols = 2 * n - 1;
  let middlePoint = Math.floor((2 * n - 1)/2);

  for (let row=0; row<n; row++){
    let level  = '';
    for (let col=0; col<numOfCols; col++){
      if ((col >= (middlePoint-row)) && (col <= (middlePoint+row))){
        level+='#';
    }
      else{
        level+=' ';
      }
    }
    console.log(level);
  } */

module.exports = pyramid;
