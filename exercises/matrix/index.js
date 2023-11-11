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
  const res = []
  let startC = 0,
    endC = n - 1,
    startR = 0,
    endR = n - 1,
    count = 1
  for (let i = 0; i < n; i++) {
    res.push([])
  }

  while (startR <= endR && startC <= endC) {
    for (let i = startC; i <= endC; i++) {
      res[startR][i] = count
      count++
    }
    startR++
    for (let i = startR; i <= endR; i++) {
      res[i][endC] = count
      count++
    }
    endC--
    for (let i = endC; i >= startC; i--) {
      res[endR][i] = count
      count++
    }
    endR--
    for (let i = endR; i >= startR; i--) {
      res[i][startC] = count
      count++
    }
    startC++
  }

  return res
}

module.exports = matrix
