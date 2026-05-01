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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // edge cases: if either or both lists are empty no need to iterate
        if(!list1 && !list2) {
            return new ListNode('',null);
        } else if(!list2) {
             return list1;
        } else if(!list1) {
            return list2;
        }

        // in case both lists are not empty
        let head1 = list1;
        let head2 = list2;
        let temp1 = null;
        let temp2 = null;
         // keep value as -Infinity for easy comparison
        let currRef = new ListNode(-Infinity, null);
        let refHead = currRef;
        while(head1 && head2) {
            // compare values of head1 and head2 , take minimum of it ,assign to refHead.next and move its pointer forward
            if(head1.val <= head2.val) {
                temp1 = head1.next;
                refHead.next = head1;
                refHead = refHead.next;
                head1 = temp1;
            } else if(head2.val < head1.val){
                temp2 = head2.next;
                refHead.next = head2;
                refHead = refHead.next;
                head2 = temp2;
            } 
        }

        if(head1) {
            refHead.next = head1;
        }

        if(head2) {
            refHead.next=head2;
        }

        return currRef.next;
    }
}
