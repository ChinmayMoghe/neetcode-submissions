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
        let curr1 = l1;
        let curr2 = l2;
        let curr3 = dummy;

        while(curr1 || curr2) {

            const sum = (curr1?.val ?? 0) + (curr2?.val ?? 0) + carry;
            const val = sum % 10;
            carry = Math.trunc(sum / 10);

            curr3.next = new ListNode(val);
            curr3 = curr3.next;
            
            if(curr1) {
                curr1  = curr1.next;
            }

            if(curr2) {
                curr2 = curr2.next;
            }
        }

        if(carry) {
            curr3.next = new ListNode(carry);
        }
        return dummy.next;
    }
}
