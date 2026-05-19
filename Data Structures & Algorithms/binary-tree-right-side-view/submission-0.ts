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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if(root == null) {
            return [];
        }

        let stack = [root];
        let result = [];
        while(stack.length) {
            let nextLevel = [];
            let node = stack.pop();
            result.push(node.val);
            
            while(stack.length) {
                let node = stack.pop();
               
                if(node.left) nextLevel.push(node.left);
                if(node.right) nextLevel.push(node.right);
            }
            stack = nextLevel;
            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
        }
        return result;
    }
}
