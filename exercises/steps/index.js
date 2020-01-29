// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     // for (let i = 0; i < n; i++) {
//     //     console.log("#".repeat(i + 1) + " ".repeat(n - i - 1))
//     // } 

//     for (let i = 0; i < n; i++) {
//         let toCL = ''
//         for (let j = 0; j < n; j++) {
//             if(i >= j){
//                 toCL += "#"
//             }else{
//                 toCL+=" "
//             }
//         }
//         console.log(toCL)
//     } 
// }

function steps(n, row = 0, stair = "") {
    if (n === row){
        return
    }

    if (n === stair.length) {
        console.log(stair)
        return steps(n, row + 1)
    }

    if(stair.length <= row){
        stair += "#"
    }else{
        stair += " "
    }

    steps(n, row, stair)
}

module.exports = steps;
