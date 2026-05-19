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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
          if(root === null) {
            return [];
        }
        let result = [];
        let queue = [root];
        let start = 0;
        while(start < queue.length) {
            const size = queue.length - start;
            let level = [];

            for(let i=start;i< size + start;i++) {
                let node = queue[i];
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                level.push(node.val);
            }
            
            start+=size;
            result.push(level);
        }
        return result;
    }
}
