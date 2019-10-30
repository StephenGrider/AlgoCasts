// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  //add to back
  //O(1) time
  append(value) {
    let node = { value: value, next: null };
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  //add to front
  //O(1) time
  prepend(value) {
    let node = { value: value, next: null };
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insert(value, index) {
    let node = { value: value, next: null };
    let previous = this.head;
    let current = this.head.next;
    let counter = 1;
    while (counter < index && current !== null) {
      counter++;
      current = current.next;
      previous = previous.next;
    }
    node.next = current;
    previous.next = node;
    this.length++;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current);
      console.log();
      current = current.next;
    }
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let counter = 1;
    let current = this.head.next;
    let previous = this.head;
    while (counter < index) {
      counter++;
      current = current.next;
      previous = previous.next;
    }
    previous.next = current.next;
    this.length--;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.prepend(5);
myLinkedList.prepend(16);
myLinkedList.insert(99, 2);
myLinkedList.remove(2);
console.log(myLinkedList);
console.log(myLinkedList.printList());
