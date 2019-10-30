//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//let input = [2,5,1,2,3,5,1,2,4]
let input = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//let input = [2, 3, 4, 5];

//O(n^2) runtime

// function firstRecurringCharacter(input) {
//   let minDistance = null
//   let winner = undefined
//   for(let i=0; i<input.length-1; i++){
//     let item = input[i]
//     let currDistance = null
//     for(let j=(i+1); j<input.length; j++){
//       currDistance += 1
//       if(item === input[j] && minDistance === null){
//         winner = item
//         minDistance = currDistance

//       } else if (item === input[j] && currDistance < minDistance){
//         winner = item
//         minDistance = currDistance
//       }
//     }
//   }
//   return winner
// }

//O(n) runtime

function firstRecurringCharacter(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    if (obj[input[i]]) {
      return input[i];
    } else {
      obj[input[i]] = 1;
    }
  }
}

console.log(firstRecurringCharacter(input));
