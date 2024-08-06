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

const Queue = require('./queue')


function weave(sourceOne, sourceTwo) {
    let q = new Queue();
   
    
    while (sourceOne.length  || sourceTwo.length ) {
        if (sourceOne.peek()) {
            console.log(sourceOne.peek())
            q.add(sourceOne.remove()); // Add to the new queue from sourceOne
            
        }
        if (sourceTwo.peek()) {
            console.log(sourceTwo.peek())
            q.add(sourceTwo.remove()); // Add to the new queue from sourceTwo
            
        }
    }
    
    console.log(q.data);
    return q
}



// const queueOne = new Queue();
// queueOne.add(1);
// queueOne.add(2);
// queueOne.add(3);
// console.log(queueOne.data[queueOne.data.length1])

// const queueTwo = new Queue();
// queueTwo.add('Hi');
// queueTwo.add('There');


// weave(queueOne,queueTwo)
//console.log(queueOne, queueTwo)

module.exports = weave;
