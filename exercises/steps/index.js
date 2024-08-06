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

function steps(n, row = 0, stair = '') {

    // for(let i = 0; i <  n; i++) {
    //     let string = ''
    //     for(let j = 0; j < n; j++) {
    //         if( i >= j) {
    //             string += '#'
    //         }
    //         else{
    //             string += ' '
    //         }
    //     }
    //     console.log(string)
    // }

   if(n === row) {
    diamond(n - 1, row - 2, stair)
    return;
   }

   if(n === stair.length) {
    console.log(stair)
    steps(n, row + 1, '')
    return;
   }

   if(stair.length <= row){
    stair += '#'
   }
   else{
    stair += ' '
   }

   steps(n, row, stair)
}

function diamond(n, row, stair) {
        
    if(n === 0){
        return ;
    }
    
    if(n === stair.length) {
        return diamond(n, row - 1 ,'')
    }

    if(stair.length < row){
        stair += '#'
       }
       else{
        stair += ' '
       }
    
       diamond(n, row, stair)

}

steps(5)

module.exports = steps;
