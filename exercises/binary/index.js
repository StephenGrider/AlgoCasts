function solution(N) {
	debugger
	console.log('N: ', N);
	if (N[N.length - 1] === '0') { N = N.slice(0, N.length) }


	let asdf = N.toString(2)


	if (asdf[asdf.length - 1] === '0') {
		asdf = asdf.split('').shift()
		console.log('asdf', asdf);
	}
	// debugger

	asdf.split('1').sort((a, b) => a < b ? -1 : 1)
	// console.log(asdf[asdf.length - 1].length)

	console.log('return: ', asdf)
	return asdf[asdf.length - 1].length
}

solution(20.10200)
// solution(20.102)
// solution(20)

solution(1041.0000000)

function rbin(N) {
	console.log(N.toString(2));
	return N.toString()
}


module.exports = solution;