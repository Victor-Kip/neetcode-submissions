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
        const inOrderMap = new Map<number,number>();
        for(let i = 0;i < inorder.length;i++){
            inOrderMap.set(inorder[i],i);
        }
        let preOrderIndex = 0
        function placeNode (inOrderStart:number,inOrderEnd:number){
            if(inOrderStart > inOrderEnd) return null;
            let rootVal = preorder[preOrderIndex++];
            let root = new TreeNode(rootVal);
            const inorderIndex = inOrderMap.get(rootVal);
            root.left = placeNode(inOrderStart,inorderIndex-1)
            root.right = placeNode(inorderIndex+1,inOrderEnd);
            return root;
        }
        return placeNode(0,inorder.length-1)
    }
}
