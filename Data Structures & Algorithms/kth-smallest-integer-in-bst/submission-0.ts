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
            if(!node) {return;}
            inOrder(node.left);
            if(count === k) {return};
            out = node.val;
            count+=1;
            inOrder(node.right);
        }

        inOrder(root);
        return out;
    }
}
