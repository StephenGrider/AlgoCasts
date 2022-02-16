function reverse(str) {
    let arr = str.split("");
    let arrReversed = arr.reverse();
    let strReversed = arrReversed.join("");
    return strReversed;

}

function reverse(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed
    }
    return reversed

}

function reverse(str) {
    let arr = [];

    for (let i = str.length - 1; i >= 0; i--) {
        let element = str[i];
        arr.push(element);
    }

    let newStr = arr.join("")
    return newStr
}

function reverse(str){
    return str.split("").reduce((rev, char) => char + rev, "")
}
