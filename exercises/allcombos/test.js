const solution = require('./index');

test('return all combos of given array of arrays', () => {
	expect(solution([[a, b], [c, d, e], [f, g]])).toEqual(
		["acf",
			"acg",
			"adf",
			"adg",
			"aef",
			"aeg",
			"bcf",
			"bcg",
			"bdf",
			"bdg",
			"bef",
			"beg"]
	);
});

