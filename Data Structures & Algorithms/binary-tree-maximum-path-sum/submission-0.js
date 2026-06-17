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
    maxPathSum(root) {
        let maxSum = -Infinity;

        function traverse(node) {
            if(node === null) {
                return 0;
            }
            let leftSum = traverse(node.left);
            let rightSum = traverse(node.right);
            leftSum = Math.max(0,leftSum);
            rightSum = Math.max(0,rightSum);

            let sum = node.val + leftSum + rightSum;
            maxSum = Math.max(sum,maxSum);
            return node.val + Math.max(leftSum, rightSum);
        }
        traverse(root);
        return maxSum;
    }
}
