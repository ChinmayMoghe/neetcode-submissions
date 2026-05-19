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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (root === null || root === undefined) {
            return [];
        }
        let queue = [root];
        let result = [];
        while (queue.length) {
            let level = [];
            let children = [];

            while(queue.length) {
                let node = queue.shift();
                if(node?.left) {
                    children.push(node?.left);
                }
                if(node?.right) {
                    children.push(node?.right);
                }  
                level.push(node.val);
            }
            queue.push(...children);
            result.push(level);
        }
        return result;
    }
}
