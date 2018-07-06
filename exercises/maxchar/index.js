// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //create a  map
    let charMap = str.split('').reduce(function(obj,val){
        obj[val] =  obj[val] + 1 || 1;
        return obj;
    }, {});

    let maxVal = -1; //helper variable
    let maxChar = ''; //helper variable
    Object.keys(charMap).forEach(function(key){
        if (charMap[key] > maxVal){
            maxVal = charMap[key];
            maxChar = key;
        }
    });
    return maxChar;
}

module.exports = maxChar;
