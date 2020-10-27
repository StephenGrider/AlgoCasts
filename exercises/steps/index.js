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
//   let word = ''
//   let temp = []
//   for (let i = 1; i <= n; i++) {
//     for(let j = 0; j < n; j++) {
//       if (j < i) {
//         temp[j] = '#'
//       } else {
//         temp[j] = ' '
//       }
//     }
//     console.log(temp.join(''))
//   }
// }

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let word = ''
    for(let j = 0; j < n; j++) {
      if (j < i) {
        word += '#'
      } else {
        word += ' '
      }
    }
    console.log(word)
  }
}

module.exports = steps;
