// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    let flipped = n.toString().split('').reverse().join('')
    let backToNum = parseInt(flipped)
    
    if(Math.sign(n) === -1) {
        return backToNum *= -1
        
    }
    else{
        return backToNum
    }
    

}

reverseInt(15)

module.exports = reverseInt;
