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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(-1);
        dummy.next = head;
        let slow = dummy;
        let fast = dummy;

        for(let i=0;i<=n;i++) {
            fast = fast.next;
        }


        while(fast) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;
        return dummy.next;
    }
}


// one pass solution: slow and fast pointer

/* Approach

*/
