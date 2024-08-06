// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // let arr = []

    // let splitString =  str.split(" ")
    // console.log(splitString)

    // splitString.forEach(word => {
    //     string.push(word[0].toUpperCase()  + word.slice(1))
    //         console.log(word.slice(1))

    // });

    // return string.join(' ')

    let stringResult = str[0][0].toUpperCase() 

    let splitArr = str.split(' ')

    for(let i = 1; i < str.length; i++ ){
        if(str[i - 1] === ' '){
            stringResult += str[i].toUpperCase()
        }
        else{
            stringResult += str[i]
        }
    }
    console.log(stringResult)
}


capitalize('get the motion tag');
module.exports = capitalize;


Boolean(10<9)

window.open('www.')