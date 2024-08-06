// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(record) {
        this.head = new Node(record, this.head)
        
    }

    size(){
        let count = 0;
        if(this.head === null){
            return count
        }
        let current = this.head
        while(current.next !== null){
            current = current.next
            count++
        }
        return count + 1
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let current = this.head
        while(current.next){
            current = current.next
        }
        return current
    }
    clear() {
        this.head = null
    }

    removeFirst() {
        this.head = this.head.next
    }

    removeLast() {
        if(!this.head) {
            return;
        }

        if(!this.head.next) {
            this.head = null
            return;
        }

        let previous = this.head
        let current = this.head.next

        while(current.next){
            previous = previous.next
            current = current.next
            
        }
        previous.next = null
    }

    insertLast(record) {

        if(!this.head) {
            this.head = new Node(record, this.head)
        }

        let current = this.head

        while(current.next) {
            current = current.next
        }
        current.next = new Node(record)
    }

    getAt(index) {
        if(!this.head) {
            return null
        }

        let current = this.head.next
        let counter = 0

        while(current) {
            if(counter === index) {
                return current
            }
            counter++
            current = current.next

        }
        console.log('ran')
        return null
    }

    removeAt(index){
        if(!this.head) {
            return null
        }

        if(index === 0){
            return this.removeFirst()
        }

        let previous = this.getAt(index - 1)
        if(!previous || !previous.next){
            return null
        }

        previous.next = previous.next.next
    }

    insertAt(record, index) {
        if(index === 0) {
            this.head = new Node(record, this.head)
            return;
          }

        if(!this.head) {
          this.head = new Node(record, this.head)
          return;
        }

        let previous = this.getAt(index - 1) || this.getLast()
        let current = new Node(record, previous.next)

        previous.next = current;
    }

    forEach(func) {
        
    }

    

}

module.exports = { Node, LinkedList };
