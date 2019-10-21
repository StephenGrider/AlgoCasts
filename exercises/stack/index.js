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
    this.data = [];
  }

  push(element) {
    this.data.push(element);
    return this.data;
  }

  pop(element) {
    return this.data.pop(element);
  }

  peek() {
    let element = this.data[this.data.length - 1];
    return element;
  }
}

module.exports = Stack;
