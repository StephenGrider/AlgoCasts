// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let split = str.split(' ');
    for(let i = 0; i < split.length; i++) {
        let upper = split[i].slice(0, 1).toUpperCase();
        let rest = split[i].slice(1);
        split[i] = upper + rest;
    }
    let join = split.join(' ');
    return join;
    console.log(join);

}

module.exports = capitalize;

/* 
Alternative solution:

1. create empty string with first char capitalized
2. for each char in string
3. if the char to the left is a space:
4. capitalize it and add it to result
5. else:
6. Add to result

function capitalize (str) {
    let result = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++) {
        if(str[i - 1] === " ") {
            let capital = str[i].toUpperCase();
            result += capital;
        }
        else {
            result += str[i]
        }
    }
    return result;
}






*/