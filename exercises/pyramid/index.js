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

function pyramid(n, row = 0, stair = "") {
    let columnLen = n * 2 - 1
    if (n === row){
        return
    }

    if (columnLen === stair.length) {
        console.log(stair)
        return pyramid(n, row + 1)
    }

    if(stair.length >= columnLen - n - row && stair.length < n + row){
        stair += "#"
    }else{
        stair += " "
    }

    pyramid(n, row, stair)
}

// function pyramid(n) {
//     let columnLen = n * 2 - 1
//     for (let i = 1; i <= n; i++) {
//         let blankSpace = " ".repeat(n-i)
//         console.log(blankSpace+"#".repeat(columnLen - (n-i) * 2)+blankSpace)
//     }
// }

module.exports = pyramid;
