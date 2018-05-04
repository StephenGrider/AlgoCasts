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


//=================================================
// pieces, defaults, base, work, call
// pieces: stair, row, col, num
// defaults: 
// 	stair = ''
// 	row = ''
// 	col = ''

//base case


//============= recursion ================================
function steps(n, row = 0, stair = '') {
	if (n === row) {
		return;
	}

	if (n === stair.length) {
		console.log(stair);
		steps(n, row + 1)
		return;
	}

	// if (stair.length <= row) {
	// 	stair += '#'
	// } else {
	// 	stair += ' '
	// }
	// refactored:

	stair.length <= row ? stair += '#' : stair += ' '

	steps(n, row, stair)
}


//============= iterative ================================
// function steps(n) {
// 	if (n === 0) {
// 		return;
// 	} else {
// 		for (let i = 1; i < n; i++) {
// 			let stair = ''
// 			stair += '#'.repeat(i);
// 			stair += '.'.repeat(n - i);
// 			console.log(stair);
// 		}
// 	}
// 	// n--
// 	// steps(n)
// }

//============= iterative ================================
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

//============= iterative ================================
// function steps(n) {
// 	let stair = ''
// 	for (let i = 1; i <= n; i++) {
// 		stair += '#'
// 		stair += '-'
// 		console.log('[stair]', stair);
// 	}
// }

//============= iterative ================================
// function steps(n) {
// 	for (i = 1, s = n - 1; i <= n; i++ , s--) {
// 		console.log('#'.repeat(i) + '.'.repeat(s))
// 	}
// }

module.exports = steps;
