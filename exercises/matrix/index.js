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
    let result = []

    for (let i = 0; i < n; i++) {
        result.push([])
    }

    let startC = 0
    let startR = 0
    let endC = n-1
    let endR = n-1
    let counter = 1

    while (startC <= endC && startR <= endR) {
        for (let i = startC; i <= endC; i++) {
            result[startR][i] = counter
            counter++
        }
        startR++

        for (let i = startR; i <= endR; i++) {
            result[i][endC] = counter
            counter++
        }
        endC--

        for (let i = endC; i >= startC; i--) {
            result[endR][i] = counter
            counter++
        }
        endR--

        for (let i = endR; i >= startR; i--) {
            result[i][startC] = counter
            counter++
        }
        startC++
    }
    return result
}

module.exports = matrix;
