// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  
  // first try 
  // let results = [];
  // results[0] = Array(n).fill(0);
  // for (let col = 0; col < n; col ++ ) {
  //   results[0][col] = col + 1;
  // }
  
  // for (let row = 1; row < n; row ++ ) {
  //   results[row] = Array(n).fill(0);
  //   results[row][n-1] = n + row;
  // }
  
  // let lastRowStarter = (2 * n + (n-2))
  
  // for (let row = n - 1; row > 0; row --) {
    
  //   let currentRowStarter = lastRowStarter
    
  //   for (let col = 0; col < n - 1; col ++) {
  //     results[row][col] = currentRowStarter; 
  //     currentRowStarter -= 1;
  //   }
  //   lastRowStarter += 1;
  // }

  // return results;


  // second try 

  let results = []; 

  for(let i = 0; i < n; i++) {
    results.push([]);
    }
  let counter = 1; 
  let startCol = 0; 
  let endCol = n - 1; 
  let startRow = 0; 
  let endRow = n - 1; 

  while (startCol <= endCol && startRow <= endRow) {
    //top row
    for(let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter; 
      counter++;
    }
    startRow++; 
    
    //right column
    for(let j = startRow; j <= endRow; j++) {
      results[j] = []; 
      results[j][endCol] = counter;
      counter++;
    }
    endCol--; 

    //bottom row
    for(let k = endCol; k >=startCol; k--) {
      results[endRow][k] = counter;
      counter++;
    }

    //start column
    endRow--;
    for(let l = endRow; l >= startRow; l--) {
      results[l][startCol] = counter; 
      counter++;
    }
    // debugger
    startCol++;     //startRow alreay incremented
    
  }
  return results;
}

// matrix(3)

module.exports = matrix;
