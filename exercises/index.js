// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function printNumber(n) {
	if (n === 0) {
		return;
	}
	console.log(n);
	n--
	printNumber(n);
}

printNumber(10);


//=================================================
// function steps(n) {
// 	for (i = 1, s = n - 1; i <= n; i++ , s--) {
// 		console.log('#'.repeat(i) + ' '.repeat(s))
// 	}
// }

//=================================================
// function steps(n) {
// 	for (let row = 0; row < n; row++) {
// 		let stair = '';

// 		for (let column = 0; column < n; column++) {
// 			if (column <= row) {
// 				stair += '#';
// 			} else {
// 				stair += ' ';
// 			}
// 		}
// 		console.log(stair);
// 	}
// }

module.exports = steps;







