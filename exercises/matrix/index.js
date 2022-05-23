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
  const result = Array.from({ length: n }).map(value => []);

  let topRow = 0;
  let bottomRow = n - 1;
  let leftColumn = 0;
  let rightColumn = n - 1;

  let currentNumber = 1;

  while (topRow <= bottomRow && leftColumn <= rightColumn) {

    // top row
    for (let horizontalIndex = leftColumn; horizontalIndex <= rightColumn; horizontalIndex++) {
      result[topRow][horizontalIndex] = currentNumber;
      currentNumber++;
    }
    topRow++;


    // right column
    for (let verticalIndex = topRow; verticalIndex <= bottomRow; verticalIndex++) {
      result[verticalIndex][bottomRow] = currentNumber;
      currentNumber++;
    }
    rightColumn--;


    // bottom row
    for (let horizontalIndex = rightColumn; horizontalIndex >= leftColumn; horizontalIndex--) {
      result[bottomRow][horizontalIndex] = currentNumber;
      currentNumber++;
    }
    bottomRow--;


    // left column
    for (let verticalIndex = bottomRow; verticalIndex >= topRow; verticalIndex--) {
      result[verticalIndex][leftColumn] = currentNumber;
      currentNumber++;
    }
    leftColumn++;

  }

  return result;
}

module.exports = matrix;