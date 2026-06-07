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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let out=null;
        let count = 0;
        function inOrder(node:TreeNode | null) {
            if(!node || out !== null) {return;}
            inOrder(node.left);
            count+=1;
            if(count === k) {
                out = node.val;
                return;
            };
            inOrder(node.right);
        }

        inOrder(root);
        return out;
    }
}
