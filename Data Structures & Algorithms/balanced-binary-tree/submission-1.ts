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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
 
        function dfs(curr:TreeNode|null):number{
            if (!curr) return 0;
            const leftHeight = dfs(curr.left);
            if(leftHeight === -1) return -1;
            const rightHeight = dfs(curr.right);
            if(rightHeight === -1) return -1;
            if (Math.abs(leftHeight - rightHeight)>1) return -1;
            return 1 + Math.max(leftHeight,rightHeight);
        }
         return dfs(root) !== -1;

    }
}
