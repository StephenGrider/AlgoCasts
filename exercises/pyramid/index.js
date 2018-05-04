// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'

//   pyramid(2)
//       ' # '
//       '###'

//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'


// ============================= draft2 =====================
//       '  #  '
//       ' ### '
//       '#####'

// each row has fill, then a number of #s, then fill
// each row's length equals the total number of rows
// each new row has 2 less fill, and 1 additional #
// the amount of fill on first row is (n * 2) - 1


//============= recursion ================================
function pyramid(n, row = 0, level = '') {
	if (row === n) {
		return;
	}

	if (level.length === 2 * n - 1) {
		console.log(level);
		return pyramid(n, row + 1)
	}

	const midpoint = Math.floor((2 * n - 1) / 2)
	let add;
	if (midpoint - row <= level.length && midpoint + row >= level.length) {
		add = '#';
	} else {
		add = ' ';
	}
	pyramid(n, row, level + add)
}


pyramid(5)

module.exports = pyramid;



// ========= iterative passing ============
// function pyramid(n) {
// 	const midpoint = Math.floor((2 * n - 1) / 2)
// 	for (let row = 0; row < n; row++) {
// 		let level = '';

// 		for (let column = 0; column < (n * 2) - 1; column++) {
// 			if (midpoint - row <= column && midpoint + row >= column) {
// 				level += '#';
// 			} else {
// 				level += ' ';
// 			}
// 		}
// 		console.log(level);
// 	}
// }

// =========draft2 makes pyramids, but does not pass test ============
// function pyramid(n) {
// 	let rowLength = n <= 2 ? 3 : (n * 2) - 2

// 	let hashes = rowLength - (rowLength - 1)
// 	let spaces = rowLength - (hashes - 2)

// 	for (let i = 0; i < n; i++) {
// 		let row = ' '.repeat(spaces) + '#'.repeat(hashes) + ' '.repeat(spaces)
// 		hashes += 2
// 		spaces--
// 		console.log(row)
// 	}
// }


// =============================draft1 not done=====================
// function pyramid(n) {
// 	let shape = []
// 	let rowLength = n
// 	for (let i = 0, fill = n; i < n; i++ , fill--) {
// 		let row = ''
// 		row += '.'.repeat(i * (fill))
// 		row += '#'.repeat(i)
// 		row += '.'.repeat(i * (fill))

// 		shape.push(row)
// 	}
// 	// debugger
// 	shape.map(r => console.log(r));
// }