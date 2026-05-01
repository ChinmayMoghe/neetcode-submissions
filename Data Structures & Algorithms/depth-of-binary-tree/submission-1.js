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
        function dfs(node) {
            if(!node) {
                return 0;
            }

            return Math.max(dfs(node.left), dfs(node.right)) + 1;
        }

        return dfs(root);
    }
}
