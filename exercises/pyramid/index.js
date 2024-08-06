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

function pyramid(n) {
    let arr = [' ']    
    
    if(n === 1){
        return '#'
    }

    for(let i = 1; i < n; i++) {
        arr.push(' ')
        arr.push(' ')
    }
    let midpoint = Math.floor(arr.length/2)
    arr[midpoint] = '#'
    console.log( arr.join(''))

    for(let i = 1; i < n; i++) {
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === ' ') {
                if(arr[j + 1] === '#' || arr[j - 1] === '#') {
                    arr[j] = '#'
                    count++
                }
                if(count === 2) {
                    break;
                }
            }
           
        }
        console.log(arr.join(''))
    }
    
}

pyramid(7)
module.exports = pyramid;
