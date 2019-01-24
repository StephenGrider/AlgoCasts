// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.stack = [];
  }

  push(record) {
    this.stack.push(record);
  }
  pop(record) {
    return this.stack.pop(record);
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = Stack;
