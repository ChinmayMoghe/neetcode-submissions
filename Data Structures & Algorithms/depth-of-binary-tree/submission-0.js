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
        function dfs(node,height) {
            if(!node) {
                return height;
            }

            height += Math.max(dfs(node.left,height), dfs(node.right,height)) + 1;
            return height;
        }

        return dfs(root,0);
    }
}
