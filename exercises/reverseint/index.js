// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
    //if elseではなく、 n<0のケースだけ例外ケースとして扱って、それ以外は通常ケースとして扱うようにする
//     if (Math.sign(n) === 1) {
//         if (n.toString().split("")[n.length - 1] === 0) {
//             return parseInt(n.toString().split("").slice(-1).reverse().join("")) //このケースはparseIntすれば(005)みたいな文字列は5に変わるので考えなくてもよい
//         }
//         return parseInt(n.toString().split("").reverse().join(""))
//     } else {
//         if (n === 0) { //-0もparseIntしたら 0になるので考えなくても良い
//             return - parseInt("-" +(-n).toString().split("").reverse().join(""))
//         }
//         return  parseInt("-" +(-n).toString().split("").reverse().join(""))
//     }
// }

//Point
//1. 数値に対しては.splitメソッドが使えないので（文字列をarray化するやつ）まずはtoStringで文字列化
//2. 文字列化した値をsplitメソッドで配列化して、reverse、joinで反転した文字列化
//3. parseIntで文字列を数値化
// Math.sign()は引数に渡した数値が-マイナス値の場合は-1、プラス値の場合は1

function reverseInt(n) {
    return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n)
}


module.exports = reverseInt;
