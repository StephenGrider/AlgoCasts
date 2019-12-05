// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slowPointer = list.getFirst();
  let fastPointer = list.getFirst();

  //check that there is a next node after the node that is being pointed by
  //fastPinter and that there is a node after that next node. 
  while (fastPointer.next && fastPointer.next.next){
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer === fastPointer){
      return true;
    }
  }
  return false;
}

module.exports = circular;
