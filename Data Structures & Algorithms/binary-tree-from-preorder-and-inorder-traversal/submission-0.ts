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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        // keep it shared since we need to make sure the tree is 
        // built sequentially with pre order array 
        let pre_index = 0;

        function buildTree(start:number, end:number): TreeNode {
            if(start > end) {
                return null;
            }
            let root_val = preorder[pre_index];
            let root = new TreeNode(root_val);
            pre_index += 1; // move to next root 

            let inorder_idx = inorder.indexOf(root_val);
            root.left = buildTree(start, inorder_idx - 1);
            root.right = buildTree(inorder_idx+1, end);
            return root;
        }

        return buildTree(0, inorder.length - 1);
    }
}
