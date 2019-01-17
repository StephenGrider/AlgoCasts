// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.

// First In Last Out (FILO)

// --- Methods
// push = adding records to the stack
// pop = removing records from the top of the stack
// peek = returning top record without removing it

// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor () {
    this.something = [];
  }

  push(record) {
    this.something.push(record);
  }

  pop() {
    return this.something.pop();
  }

  peek() {
    this.something[this.something.length -1];
  }
}

module.exports = Stack;
