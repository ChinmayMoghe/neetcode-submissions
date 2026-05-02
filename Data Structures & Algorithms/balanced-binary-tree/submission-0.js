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
        let result = true;
        function dfs(root) {
            if(!root) {return 0};

            const leftHeight  =  dfs(root.left);
            const rightHeight = dfs(root.right);
            console.log({root,leftHeight,rightHeight, diff:Math.abs(leftHeight - rightHeight)});
            if(Math.abs(leftHeight - rightHeight) > 1) {result = false};
            return Math.max(leftHeight,rightHeight) + 1;
        }
        dfs(root);
        
        return result;
    }
}
