

function printNumber(n, dec = 1) {
	if (n === 0) {
		return;
	}
	console.log(n);
	// n--
	printNumber(n - dec);
}

printNumber(10);
// printNumber(10, 2);
