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
  let result = [];

  //create an array of arrays
  for (let i =0 ; i<n;i++){
    result.push([]);
  }
  let startRow = 0;
  let startCol = 0;
  let endRow = n-1;
  let endCol = n-1;
  let counter = 1;

  while(startRow <= endRow && startCol <= endCol){

    for (let col=startCol; col<=endCol; col++){
      result[startRow][col] = counter;
      counter++;
    }
    startRow++;

    for (let row=startRow; row<=endRow; row++){
      result[row][endCol] = counter;
      counter++;
    }
    endCol--;

    for (let col=endCol; col>=startCol; col--){
      result[endRow][col] = counter;
      counter++;
    }
    endRow--;

    for (let row=endRow; row>=startRow; row--){
      result[row][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  
  return result;

}

module.exports = matrix;
