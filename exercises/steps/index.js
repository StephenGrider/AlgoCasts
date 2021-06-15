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
    // from 0 to n(iterate through rows)
    for (let row = 0; row < n; row++) {

        // create an empty string, 'stair'
        let stair = '';

        // from 0 to n (iterate through columns)
        for (let column = 0; column < n; column++) {
            
            // if the current column is equal to or less than the current row
            if (column <= row) {

                // add a "#' to 'stair'
                stair += '#';
            
                // else
            } else {

                // add a '#' to 'stair'
                stair += ' ';
            }
        }

        // console.log 'stair'
        console.log(stair);
    }
}

module.exports = steps;
