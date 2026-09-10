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
    serialize(root: TreeNode | null): string {
        var serialized:string[] = [];
        function preorder(node:TreeNode | null){
            if(!node){
            serialized.push('null');
            return 
            }
            serialized.push(node.val.toString())
            preorder(node.left)
            preorder(node.right)
            }
        preorder(root);
        return serialized.join(",")        
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */

    deserialize(data: string): TreeNode {
        const tokens = data.split(",");
        let index = 0
        function construct():TreeNode | null{
            const token = tokens[index++];
            if(token === "null") return null;
            const node = new TreeNode(parseInt(token,10));
            node.left = construct();
            node.right = construct();
            return node;
        }
        return construct()
    }
}
