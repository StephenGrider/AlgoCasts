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
  let results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let startColumn = 0;
  let startRow = 0;
  let endColumn = n - 1;
  let endRow = n - 1;
  let currentValue = 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = currentValue++;
    }
    startRow++;

    // right column
    for (let j = startRow; j <= endRow; j++) {
      results[j][endColumn] = currentValue++;
    }
    endColumn--;

    // bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = currentValue++;
    }
    endRow--;

    // left column
    for (let j = endRow; j >= startRow; j--) {
      results[j][startColumn] = currentValue++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
