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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return root;
        const stack = [root];

        while(stack.length) {
            const node = stack.pop();

            let temp = node.left;
            node.left = node.right;
            node.right = temp;

            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
        }

        return root;
    }
}
