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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let dummy = new ListNode(null);
        let curr3 = dummy;

        while(l1 || l2) {

            const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
            carry = Math.trunc(sum / 10);

            curr3.next = new ListNode(sum % 10);
            curr3 = curr3.next;
            
            if(l1) {
                l1  = l1.next;
            }

            if(l2) {
                l2 = l2.next;
            }
        }

        if(carry) {
            curr3.next = new ListNode(carry);
        }
        return dummy.next;
    }
}
