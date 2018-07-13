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
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();  
  }
  add(value){
    //empty current stack1 and push to stack2 
    while(this.stack1.peek()){
      this.stack2.push(this.stack1.pop());
    }
    //then add the new value to be stack1
    this.stack1.push(value);
    //then push the values from stack2 back to stack1
    while(this.stack2.peek()){
      this.stack1.push(this.stack2.pop());
    }
  }
  remove(){
    return this.stack1.pop();
  }
  peek(){
    return this.stack1.peek();
  }
}

module.exports = Queue;
