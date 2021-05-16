// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document


// const nodeOne = { data: 123 }
// const nodeTwo = { data: 123 }
// nodeOne.next = nodeTwo; 

class Node {
  constructor(data, next = null){
    this.data = data; 
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(el) {
    // const newNode = new Node(el, this.head);
    // this.head = newNode;

      this.head = new Node(el, this.head);

    // if(this.head) {
    //   let currentNode = this.head; 
      
    //   while(currentNode.next) {
    //     currentNode = currentNode.next;
    //   }
    //   currentNode.next = newNode;
    // } else {
    //   this.head = newNode;
    // }
  }

  size() {
    // if(!this.head) { return 0}
    
    // let counter = 1;
    // let currentNode = this.head;
    // while(currentNode.next) {
    //   counter++; 
    //   currentNode = currentNode.next
    // }
    // solution 2
    let counter = 0; 
    let currentNode = this.head; 

    while(currentNode) {
      counter++; 
      currentNode = currentNode.next;
    }

    return counter;
  }

  getFirst() {
    return this.head ? this.head : null
  }

  getLast() {
    let currentNode = this.head; 
    if(!currentNode) { return null}

    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  clear() {
    // delete this.head;
    this.head = null; 
  }

  removeFirst() {
    // assign the 2nd node to the head. 
    this.head = this.head.next;
  }

  removeLast() {
    // iterate to the 2nd last el and remove its next object
    let currentNode = this.head; 
    if(!currentNode || !currentNode.next) { return this.head = null};

    // while(currentNode.next.next) {
    //   currentNode = currentNode.next; 
    // }
    // let lastNode = currentNode.next;
    // currentNode.next = null;
    // return lastNode;

    let previousNode;
    while(currentNode.next) {
      previousNode = currentNode; 
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    return currentNode;
  }

  // need to get the reference to the last node. 
  insertLast(el) {
    // get the last node and assign lastNode.next = newNode
    const newNode = new Node(el);
    this.getLast() ? this.getLast().next = newNode : this.head = newNode; 
  }

  // linklist is 0 indexed 
  // get the entired node of that index

  getAt(n) {
    // loop till n and return the node 
    let currentNode = this.head;

      // if n = 0, return this.head
      // if n = 1, return this.head.next
    // if(!this.size() || this.size() < n){ 
      // return null
    // } else if ( n === 1) {
    //   return this.head.next;
    // }
    // if n = 3, i is 0, 1, 2 
    // for(let i = 0; i < n; i++) {
    //   currentNode = currentNode.next;
    // }
    // return currentNode;

    // solution 2
    // use a counter , while loop when counter = index , counter stop and return the node

    // 2 edge case, when link linked list is null or index out of range 

    // if (!this.head) { return null}

    let counter = 0; 

    // while(counter < n) {
    //   currentNode = currentNode.next; 
    //   counter++; 
    // }
    // return currentNode;

    while(currentNode) {
      if(n === counter) {
        return currentNode; 
      }else if(!currentNode) {
        return null;
      }
      counter++; 
      currentNode = currentNode.next;
    }
    return null; 
  }

  removeAt(index) {
    // empty linkedlist 
    // index out of bound 
    // delete the first node 
    // delete the last node 
    if(!this.head) { 
      return null;
    } else if(this.size() < index) {
      return null;
    } else if( index === 0) {
      // this.removeFirst();
      this.head = this.head.next;
    } 
    else if( index === this.size()){
      this.removeLast();
    } 
    else {
      // delete any given index
      // getAt to get the node and previous node to be removed
      let currentNode = this.getAt(index)
      let previousNode = this.getAt(index -1)
      // if(!previousNode || !currentNode.next) { return null}
      previousNode.next = currentNode.next; 
    }
  }
}

module.exports = { Node, LinkedList };
