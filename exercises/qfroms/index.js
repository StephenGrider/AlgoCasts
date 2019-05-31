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
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
    }

    add(item) {
        this.stackA.push(item);
    }

    remove() {
        while(this.stackA.peek()) {
            const record = this.stackA.pop();
            this.stackB.push(record);
        }
        const record = this.stackB.pop();
        
        while(this.stackB.peek()) {
            const record = this.stackB.pop();
            this.stackA.push(record);
        }
        return record;
    }

    peek() {
        while(this.stackA.peek()) {
            const record = this.stackA.pop();
            this.stackB.push(record);
        }

        let reference = this.stackB.peek();

        while(this.stackB.peek()) {
            const record = this.stackB.pop();
            this.stackA.push(record);
        }

        return reference;
    }

}

module.exports = Queue;
