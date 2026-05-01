/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
      let [slow, fast] = [head,head];

      // this is to get the mid point for the linked list 
      // consider that it represents mid of the list that we calculate something like this 
      // mid = Math.floor(len / 2); // slow will point to that mid

      while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next?.next;
      }

      // from mid, we need to reverse the list
      let curr = slow;
      let prev = null;

      // reverse the second half of the list 
      // 1 -> 2 -> 3 -> 4
      // 1 -> 2  4 -> 3 -> 2 (don't worry about the 2 part in second half we gonna fix that)
      while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
      }

      // prev will point to the head of the reversed list
      let [h1,h2] = [head,prev];

      while(h1 && h1.next && h2 && h2.next) {
        let temp1 = h1.next;
        h1.next = h2;
        let temp2 = h2.next;
        h2.next = temp1;
        h1 = temp1;
        h2 = temp2;
      }
    }
}
