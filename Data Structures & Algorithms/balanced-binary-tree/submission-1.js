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
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(root) {
            if(!root) {return 0};

            const leftHeight  =  dfs(root.left);
            const rightHeight = dfs(root.right);
            if(leftHeight === -1) return -1;
            if(rightHeight === -1) return -1;
            if(Math.abs(leftHeight - rightHeight) > 1) {return -1};
            return Math.max(leftHeight,rightHeight) + 1;
        }
        return dfs(root) !== -1;
    }
}
