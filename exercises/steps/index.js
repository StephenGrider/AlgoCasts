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


/*                        Solution 1                         */
// from 0 to n
    // create an empty string, 'stair'
    //from 0 to n
        // IF the current column is equal to or less that the current row
            // Add a '#' to 'stair'
        // ELSE
            // Add a space to 'stair'
    //Console log 'stair'
// 


function steps(n) {
    for (let row=0; row<n; row++){
        let stair = '';

        for (let column = 0; column < n; column++){
            if (column <= row) {
                stair += '#';
            } else{
                stair += ' ';
            }
        }
        console.log(stair) //console log in for loop to get one console log for each row we are trying to assemble
    }
}

module.exports = steps;
