// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



/*                        Solution 1                         */

// make an empty array 'words'
// split the input string by spaces to get an array
// for each word in the array
//     1. Uppercase the first letter of the word
//     2. Join first letter with rest of the string
//     4. Push result into 'words' array
// Join 'words' into a string and return it 

// function capitalize(str) {
//     const words = [];
//     for (let word of str.split(' ')){
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }
//     return words.join(' ');
// }


/*                        Solution 2  (Less Effective)      */

// Create an empty string called 'result' which is the first character of the input
// string capitalized
// For each character in the string
    // IF the character to the left is a space
        // Capitalize it and add it to 'result'
    // Else 
        // Add it to 'result'

    // const capitalize = (str) => {
    //     let result = str[0].toUpperCase();
    //     for(let i = 1; i<str.length;i++) {
    //         if (str[i-1] === ' ') {
    //             result += str[i].toUpperCase()
    //         } else {
    //             result += str[i]
    //         }
            
    //     }
    //     return result
    // }



module.exports = capitalize;
