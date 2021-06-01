// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // What is the most common character in the string?
    // Does string A have the same characters as string B (is it an anagram?)
    // Does the given string have any repeated characters in it?

    // Counting and verifying -> Use a key value pair(Object, dictionary/hashmap in Python)
    const string = "Hello There!";
    const chars = {};

    for(let char of string) {
        // basic if statement to see if key exists
        // assign 1 or add 1
        if (!chars[char]) {
            chars[char] = 1;
        } else {
            chars[char]++;
        }
        
        // add one to the value of chars[char] if it's not null
        // if it is null(or) assign 1
        chars[char] = chars[char] + 1 || 1;
    }

    // 1. create an empty object
    const dict = {};

    // 3a. to keep track of the max number of common usage of char and char itself
    let max = 0;
    let maxChar = '';

    // 2. assign key value pairs to individual i you iterate
    for(let i of str) {
        dict[i] = dict[i] + 1 || 1;
    }

    // 3b. iterating through dict to find the char that is used most frequently
    // when iterating an object/dict you don't use 'of', you use 'in'
    // dict in sounds like dick in
    for(let i in dict) {
        // checking to see if the value is greater than max(start 0)
        if(dict[i] > max) {
            // if it is, the value of max is replaced with the current value
            max = dict[i];
            // as well as the maxChar which is replaced with the current i(key)
            maxChar = i;
        }
    }

    return maxChar;



}

module.exports = maxChar;
