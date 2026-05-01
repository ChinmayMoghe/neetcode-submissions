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
        let curr = head;
        let prev = null;
        let count = 0;

        while(curr) {
            curr = curr.next;
            count+=1;
        }

        // find the idx of element to remove 
        const toRemoveIdx = count - n; 

        if(toRemoveIdx === 0) {
            return head.next;
        } 

        let idx = 0;
        curr = head;
        while(idx !== toRemoveIdx) {
            prev = curr;
            curr = curr.next;
            idx +=1;
        }

        if(prev) {
             prev.next = curr.next;
             curr.next = null;
        } else if(prev == null) {
            head = null;
        }

        return head;
    }
}


// approach
/*
head - linked list

n - nth element from the end

list  1 -> 2 -> 3 -> 4  n = 2
count 1    2    3    4
idx   0    1    2    3

total = 4 

idx = total - n = 2

n = 3

idx = total - n = 4 -  3 = 1

first count total elements, get total 

calculate idx of element to remove 

toRemoveIdx = total - n

iterate again and track prev and current element when idx === toRemoveIdx , exit loop 

prev = null or node; // depends if the element to remove is head or not

curr = // node to remove; 

if(prev) {
    prev.next = curr.next;
    curr.next = null;
} else {
    head = curr.next;
}


*/
