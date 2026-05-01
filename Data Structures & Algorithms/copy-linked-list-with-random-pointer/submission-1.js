// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
      // create a hashmap of old vs newly created list node, its fine if we create new list nodes next and random pointing at nothing
      if(!head) {
        return head;
      }
      const map = new Map();
      let curr = head;

      while(curr) {
        map.set(curr, new Node(curr.val));
        curr = curr?.next;
      }

      for(const [key,value] of map.entries()) {
        value.next = map.get(key.next) ?? null;
        value.random = map.get(key.random) ?? null;
      }

      return map.get(head);
    }
}

/*
 Approach 
 
 3->7->4->5->null

 Problems 

 1. Create deep copy 
 2. none of the pointers in the new list should point to  nodes in original list 

 I will have to traverse the list and create a copy of the node and its next and random pointers 

 Start with 3 , create a ListNode(3, ?, ?) -> new node is not there, neither is random node (both should exist before I create the pointers) 

We can break this up in two sub problems 

First building a linked list only (only focus on next, rather than random)

so we do this 

let curr = head.next;

let new = new ListNode(head.value,null)
let newCurr = new;
while(curr) {
  newCurr.next = new ListNode(curr.value,null);
  curr = curr.next;
  newCurr = newCurr.next;
}

// 2nd issue is with random pointer - its random - so difficult to find all the required random points quickly simply by linear iteration - possible but too expensive

so lets use a hash map to store info about a node and its random value / Node

<current node value>:<random node value || null>


*/