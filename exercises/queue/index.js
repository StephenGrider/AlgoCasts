// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed

// --- Examples
//     const q = new Queue();
// to add - enqueuing
//     q.add(1);
// to remove - dequeuing
//     q.remove(); // returns 1;

// First in First out (FIFO)

class Queue {
  constructor() {
    this.something = [];
  }

  add(record) {
    this.something.unshift(record);
  }

  remove() {
    return this.something.pop();
  }
}

module.exports = Queue;
