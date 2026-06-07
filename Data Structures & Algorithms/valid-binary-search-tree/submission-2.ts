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
    isValidBST(root: TreeNode | null): boolean {
        let prev = -Infinity;
        function inOrder(node:TreeNode|null):boolean {
            if(!node) {
                return true;
            }

            if(!inOrder(node.left)) {
                return false;
            }

            if(node.val <= prev) {
                return false;
            }

            prev = node.val;
            return inOrder(node.right);
        }

        return inOrder(root);
    }
}
