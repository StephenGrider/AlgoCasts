// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  //create an instance
  constructor(){
    // declare araray
    this.array = []
  }

  add(person) {
    //the unshift method adds to the array
    this.array.unshift(person);
  }

  remove(person) {
    //Pop() method removes item from the array
    this.array.pop(person);
  }
}

module.exports = Queue;
