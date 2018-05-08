// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

// const Queue = require('./queue');

class Queue {
	constructor() {
		this.data = [];
	}
	add(record) {
		this.data.unshift(record);
	}
	remove() {
		return this.data.pop();
	}
	peek() {
		return this.data[this.data.length - 1]
	}
}

function weave(q1, q2) {
	const q = new Queue()
	while (q1.peek() || q2.peek()) {
		if (q1.peek()) {
			q.add(q1.remove())
		}
		if (q2.peek()) {
			q.add(q2.remove())
		}
	}
	console.log('q: ', q)
	return q
}


// let asdf = new Queue()
// asdf.data = ['a', 'b', 'c', 'd', 'e']

// let zxcv = new Queue([1, 2, 3, 4, 5])
// zxcv.data = [1, 2, 3, 4, 5]

// weave(asdf.data, zxcv.data)

module.exports = weave;
