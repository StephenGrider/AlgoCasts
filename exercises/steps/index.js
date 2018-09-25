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
// comments
// from 0 to n (iterate trought rows)
// create an empty string, 'stair'
// form 0 to n (iterate through columns)
// if the current column is equal to or less than the current row
// add a '#' to 'stair'
// else
// add a space to 'stair'
// console.log 'stair'

// *** v1 ***
// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(Array(i).fill('#').join('') + Array(n - i).fill(' ').join(''))
//     }
// }

// *** v2 *** (recursion)
// function steps(n, row = 0, stair = '') {
//     if (n === row) {
//         return;
//     }
//     if (n === stair.length) {
//         console.log(stair);
//         return steps(n, row + 1);
//     }
//     const add = stair.length <= row ? '#' : ' ';
//     steps(n, row, stair + add)
// }

// *** v3 ***
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair)
//     }
// }

// *** v4 ***
function steps(n) {
    for (let i = 1; i <= n; i++) {
        console.log('#'.repeat(i) + ' '.repeat(n - i));
    }
}

// *** v5 *** (recursion)
function steps(n, stair = 1) {
    if (stair > n) {
        return;
    }
    console.log('#'.repeat(stair) + ' '.repeat(n - stair));
    steps(n, stair + 1);
}

// python solution
// for i in range(4):
//     '#'*(i+1)

module.exports = steps;
