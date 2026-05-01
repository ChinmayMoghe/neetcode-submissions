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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 0) {return new ListNode('')}
        if(lists.length === 1) {return lists[0]}

        for(let i = 1;i < lists.length;i++) {
            lists[i] = this.mergeTwoLists(lists[i - 1],lists[i]);
        }
        return lists.at(-1);
    }

    mergeTwoLists(l1,l2) {
        const dummy = new ListNode();
        let curr = dummy;

        while(l1 && l2) {
            curr.next = l1.val < l2.val ? l1:l2;

            if(l1.val < l2.val) {
                l1 = l1.next;
            } else {
                l2 = l2.next;
            }
            curr = curr.next;
        }

        if(l1) {
            curr.next = l1;
        } else if (l2) {
            curr.next = l2;
        }

        return dummy.next;
    }
}
