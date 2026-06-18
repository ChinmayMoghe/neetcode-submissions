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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */

    dfsSerialize(node,parts=[]) {
        if(node === null) {
            parts.push('N');
            return;
        }
        parts.push(node.val);
        this.dfsSerialize(node.left,parts);
        this.dfsSerialize(node.right,parts);
    }

    serialize(root) {
        const parts = [];
        this.dfsSerialize(root,parts);
        return parts.join('#');
    }

    

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const parts = data.split('#');
        let idx = 0;

        const dfsDeserialize = () => {
            const val = parts[idx];
            if(val === 'N') {
                idx++;
                return null;
            }
            const node = new TreeNode(Number(val));
            idx++;
            node.left = dfsDeserialize();
            node.right = dfsDeserialize();
            return node; 
        }
        return dfsDeserialize();
    }
}
