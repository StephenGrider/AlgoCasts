// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//use for in to iterate through an object


function maxChar(str) {
    //creating charMap object based on string 
    const charMap = {};
    // creating variable for max character count
    let max = 0;
    // creating a variable for the character that occurs the most
    let maxChar = '';

    // looping through the string by the character
    for (let char of str) {
        // if the character already exists, increment by 1
        if (charMap[char]) {
            charMap[char]++;
        // if this is the first time we have seen the character set it to 1
        } else {
            charMap[char] = 1;
        }
    }
    // second loop to go through the new character map
    for (let char in charMap) {
        // if the current char is greater than the current max
        if (charMap[char] > max) {
            // set it to the new max
            max = charMap[char];
            // set that new max numbers character to the maxChar
            maxChar = char;
        }
    }
    // return the letter that occurs the most
    return maxChar;
}

module.exports = maxChar;
