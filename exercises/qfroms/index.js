// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor (items = []) {
    this.storageStack = new Stack();
    this.temporaryStack = new Stack();
  }


  add (item) {
    this.storageStack.push(item);
  }


  remove () {
    while (this.storageStack.peek()) this.temporaryStack.push(this.storageStack.pop());

    const value = this.temporaryStack.pop();

    while (this.temporaryStack.peek()) this.storageStack.push(this.temporaryStack.pop());

    return value;
  }


  peek () {
    while (this.storageStack.peek()) this.temporaryStack.push(this.storageStack.pop());

    const value = this.temporaryStack.peek();

    while (this.temporaryStack.peek()) this.storageStack.push(this.temporaryStack.pop());

    return value;
  }
}

module.exports = Queue;