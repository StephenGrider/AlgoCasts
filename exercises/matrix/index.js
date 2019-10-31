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

function matrix (n) {
  const result = Array.from({ length: n }).map(value => Array.from({ length: n }));

  let rowsBeginning = 0;
  let rowsEnd = n - 1;
  let columnsBeginning = 0;
  let columnsEnd = n - 1;

  let currentNumber = 1;

  while (rowsBeginning <= rowsEnd && columnsBeginning <= columnsEnd) {
    // move right
    for (let horizontalIndex = columnsBeginning; horizontalIndex <= columnsEnd; horizontalIndex++) {
      result[rowsBeginning][horizontalIndex] = currentNumber;
      currentNumber++;
    }


    // move down
    for (let verticalIndex = rowsBeginning + 1; verticalIndex <= rowsEnd; verticalIndex++) {
      result[verticalIndex][rowsEnd] = currentNumber;
      currentNumber++;
    }


    // move left
    for (let horizontalIndex = columnsEnd - 1; horizontalIndex >= columnsBeginning; horizontalIndex--) {
      result[rowsEnd][horizontalIndex] = currentNumber;
      currentNumber++;
    }


    // move up
    for (let verticalIndex = rowsEnd - 1; verticalIndex >= rowsBeginning + 1; verticalIndex--) {
      result[verticalIndex][columnsBeginning] = currentNumber;
      currentNumber++;
    }

    columnsEnd--;
    rowsEnd--;
    columnsBeginning++;
    rowsBeginning++;
  }

  return result;
}

module.exports = matrix;