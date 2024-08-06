// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0
    let set = new Set(['a', 'e', 'i' , 'o', 'u'])

    console.log(set)
    for(let alpha of str){
        if(set.has(alpha.toLowerCase())){
            count++
        }
    }
    return count
}

vowels('Hi There!')
module.exports = vowels;
