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

        let inOrderLookup = new Map<number,number>();

        for (let i=0;i< inorder.length;i++) {
            inOrderLookup.set(inorder[i],i);
        }

        function buildTree(start:number, end:number): TreeNode {
            if(start > end) {
                return null;
            }
            let root_val = preorder[pre_index];
            let root = new TreeNode(root_val);
            pre_index += 1; // move to next root 
            
            // O(n) look up here - can be optimized to be a hashmap look up
            let inorder_idx = inOrderLookup.get(root_val);
            // we send in the left subtree slice to build left subtree
            root.left = buildTree(start, inorder_idx - 1);
            // we send in the right subtree slice to build right subtree 
            root.right = buildTree(inorder_idx+1, end);
            // finally return root element
            return root;
        }

        return buildTree(0, inorder.length - 1);
    }
}
