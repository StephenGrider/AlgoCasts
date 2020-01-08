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
    // Great solution if parseInt wasn't doing all the job:
    // let newNum = n.toString().split("")
    // let lastNum = newNum[newNum.length - 1]
    // let answer = ''
    // if(newNum[0] === '-') answer = "-"
    // if(newNum[0] === '0') answer = "0"
    // for (let i = newNum.length - 1 ; i >= 0 ; i--) {
    //     if(newNum[i] === "0" && lastNum === "0") continue
    //     if(newNum[i] !== "-") {answer += newNum[i]; lastNum = "1"}
    // }
    // return parseInt(answer)

    let newNum = n.toString().split("")
    let answer = ''
    for (let i = newNum.length - 1 ; i >= 0 ; i--) {
        answer += newNum[i]
    }
    return parseInt(answer) * Math.sign(n)

    // return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n)
}

module.exports = reverseInt;
