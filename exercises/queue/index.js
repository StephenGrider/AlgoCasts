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
    constructor() {
        this.array = [];

    }

    add(item) {
        this.array.unshift(item);
    }

    remove() {
        return this.array.pop();
    }
}

class QueueObject {
    constructor() {
        this.storage = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    add(item) {
        if(item) {
            this.storage[this.count] = item; //assign item to this.storage[this.count]
            this.count++;
        }
    }

    remove() {
        if(this.count - this.lowestCount === 0) {
            return undefined; // means queue is empty;
        }

        let popped = this.storage[this.lowestCount]; //keep record of popped
        delete this.storage[this.lowestCount]; //delete popped
        this.lowestCount++; //increase lowestCount since lowestCount has been deleted
        return popped; //return popped to use elsewhere if needed
    }
}

module.exports = QueueObject;
