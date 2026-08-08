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
    diameterOfBinaryTree(root: TreeNode | null): number {
        let res = 0;
        function dfs(curr: TreeNode | null):number{
            if(!curr) return 0;
            let leftHeight = dfs(curr.left)
            let rightHeight =dfs(curr.right)
            res  = Math.max(res, leftHeight + rightHeight);
            return 1 + Math.max(leftHeight,rightHeight)
        }
        dfs(root);
        return res;
    }
}
