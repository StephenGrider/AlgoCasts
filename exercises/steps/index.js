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

function steps(n) {
  let k = 1
  while (k <= n) {
    let str = ''
    for (let i = 0; i < k; i++) {
      str = str + '#'
    }
    str = str.padEnd(n, ' ')
    console.log(str)
    k++
  }
}
module.exports = steps
