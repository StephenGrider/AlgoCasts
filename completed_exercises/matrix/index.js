// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// Avoiding the boundries of tha matrix

function isLegal(location ,step, size) {
  return location.row + step.row >= 0 &&  location.row + step.row < size &&
  location.col + step.col >= 0 &&  location.col + step.col < size
}

function move(location, step) {
  return {
    row:location.row+step.row,
    col:location.col+step.col
  }
}

function matrix(n) {
  let matrix = new Array(n);
  // Fill the matrix with zero's
  for(let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
    for(let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
  
  // our move throw the matrix repeating the same routine
  // right  -> down -> left -> up ( ->right -> down .... -> ) in cyclic way 
  // we change the direction to the next one once we got to the end or when we got 
  // to a location we already filled with number
  const right = {row: 0, col:1};
  const down = {row:1, col:0};
  const left = {row :0, col:-1};
  const up  = {row : -1 , col: 0};
  const directions = [right, down, left, up];
  let location = {row:0, col:0};
  let curNumber = 1;
  let step = 0;
  while(curNumber <= n*n) {
    matrix[location.row][location.col] = curNumber;
   if(!isLegal(location,directions[step], n) ||
     matrix[move(location, directions[step]).row][move(location, directions[step]).col] != 0) {
     // taking the next direction .
     // this is cyclic so when we got to up(3) the next one wil be 0
     // because (3+1) %4 == 4%4 = 0
     step = (step + 1) % (directions.length );
   }
   location = move(location, directions[step]);
   curNumber ++;
  }
  return matrix;
}

module.exports = matrix;
