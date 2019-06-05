// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
        //otherwise, assign fast and slow to the first element
        let fast = list.head;
        let slow = list.head;
        while(fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
}

module.exports = midpoint;


/*

Create two temp vars. Point them both to the first node in the linked list. 

Start to iterate through the linked list. For every step of the while loop, advance one var forward  by 1 element, advance the other by two elements. 

As soon as we advance fast to the next node, we will check to see if the next two nodes exist...if they do exist, we still continue to iterate through the list. When fast is no longer existing, slow will be at the midpoint. 






*/