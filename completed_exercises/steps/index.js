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

function steps(num){
    var n = num+1;
    var s="";
    
   while(n){
     
      s +='#';
      n -=1;
     
    while(s.length <num){
      s += ' ';
   }
     
     if(s.length === num){
         console.log(s)
         s=s.replace(/\s/g,"")
      }
     
    }
  }



module.exports = steps;

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//
//     console.log(stair);
//   }
// }
