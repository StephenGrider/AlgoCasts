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
}

module.exports = { Node, LinkedList };
