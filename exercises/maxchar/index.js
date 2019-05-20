// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
// What is the most common char in a string?
// Does one string have the same chars as another string (anagram)?
// Does the given string have any repeated chars in it? 

// All the above questions can use the same technique
    // use an object to keep track of count of chars.


function maxChar(str) {
    let obj = {};
    let count = 0;
    //creating map
    for(let i = 0; i < str.length; i++){
        count = count + 1;
        obj[str[i]] = count;
    }

    let entries = Object.entries(obj);
    let max = 0;
    for(let i = 0; i < entries.length; i++){
        if(entries[i][1] > max){
            max = entries[i][1]
            char = entries[i][0];
        }
    }
    return char;
    
    
}

module.exports = maxChar;

/* 

function maxChar(str) {
    const chars = {};
    for (let char of str){
        if(!chars[char]){
            chars[char] = 1;
        }  else {
            chars[char]++;
        }
    }
    let max = 0;
    for (let char in chars){
        if(charMap[char] > max) {
            max = chars[char];
            char = char;
        }
    }
}

*/

console.log(maxChar("abracadabra"));
console.log(maxChar("Mississippi"));
console.log(maxChar("a;fhadpfuadjfna;dfjhapefh039uoianf;dfha9e8fahwnf"));