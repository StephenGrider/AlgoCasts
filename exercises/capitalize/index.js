// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")

    let answer = ""

    for (let i = 0; i < str.length; i++) {
        if(i === 0 || str[i - 1] === " "){
            answer += str[i].toUpperCase()
        }else{
            answer+= str[i]
        }
    }

    return answer
}

module.exports = capitalize;
