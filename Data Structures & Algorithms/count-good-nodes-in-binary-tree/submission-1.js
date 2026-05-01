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

        /*Approach 
          track maximum value along current path
          and check if the next node val is greater than that if it is set that as new max  
        */

        let count = 0;

        const dfs = (node, max=-Infinity) => {
            if(!node) return;
            if(node.val >= max) {
                max = node.val;
                count+=1;
            }
            dfs(node.left, max);
            dfs(node.right,max);
        }
        dfs(root);
        return count;
    }
}
