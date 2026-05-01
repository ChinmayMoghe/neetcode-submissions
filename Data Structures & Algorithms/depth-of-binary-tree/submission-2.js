/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        // BFS approach
        
        if(!root) return 0;

        const queue = [root];
        // pointer to the head of the queue
        let head = 0;
        let depth = 0;

        while(head < queue.length) {
            depth+=1;
            const levelSize = queue.length - head;

            for(let i=0;i<levelSize;i++) {
                const node = queue[head];
                head+=1;
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }

        return depth;

    }
}
