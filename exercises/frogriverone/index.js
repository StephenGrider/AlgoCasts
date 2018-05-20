

function solution(x, arr) {
	
	arr.find(function(element) {
		return element === x;
	});

}

solution(5, [1, 3, 1, 4, 2, 3, 5, 4])

module.exports = solution;
