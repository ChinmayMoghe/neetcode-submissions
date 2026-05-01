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
    goodNodes(root) {
        if(!root) return 0;

        /*Approach 
          track maximum value along current path
          and check if the next node val is greater than that if it is set that as new max  
        */

        const dfs = (node, max) => {
            if(!node) return 0;
            max = Math.max(node.val, max);
            const good = node.val >= max ? 1: 0;
            return good + dfs(node.left,max) + dfs(node.right,max);
        }
        return dfs(root,root.val);
    }
}
