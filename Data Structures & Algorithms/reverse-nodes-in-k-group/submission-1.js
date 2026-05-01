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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const len = this.getLength(head);
        const chunks = Math.trunc(len / k); // number of chunks to be reversed
        const pending = len - chunks * k; // pending nodes from right
        let prevChunk = null;
        let start = null;
        let pendStart = null;

        if (pending > 0) {
           pendStart = head;
           let pendingIdx = len - pending;
           while(pendingIdx) {
             pendingIdx -=1;
             pendStart = pendStart.next;
           }
        }

        for(let i=1;i<=chunks;i++) {
            let currentChunk = this.reverseChunk(prevChunk?.nextHead ?? head,k);
            console.log({currentChunk})
            if(prevChunk?.tail) {
                prevChunk.tail.next = currentChunk.head;
            } else {
                start = currentChunk.head;
            }

            prevChunk = currentChunk;
        }

        if(pendStart) {
            prevChunk.tail.next = pendStart;
        }
        return start;
    }

    getLength(head) {
        let count = 0;
        let curr = head;
        while (curr) {
            count += 1;
            curr = curr.next;
        }
        return count;
    }

    reverseChunk(head, chunkSize) {
        let curr = head;
        let prev = null;
        while (curr && chunkSize) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr=temp;
            chunkSize-=1;
        }
        return {head:prev,tail:head,nextHead:curr};
    }
}
