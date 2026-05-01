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

        while(lists.length > 1) {
            const next = []

            for(let i=0;i<lists.length;i+=2) {
                if (i + 1 < lists.length) {
                    next.push(this.mergeTwoLists(lists[i], lists[i + 1]));
                } else {
                    next.push(lists[i]);
                }
            }
            lists = next;
        }
        return lists[0] || null;
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
