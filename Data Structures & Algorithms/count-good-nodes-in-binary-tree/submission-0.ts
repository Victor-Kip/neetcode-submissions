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
    goodNodes(root: TreeNode | null): number {
        function dfs(node:TreeNode,maxVal:number):number{
            if(!node) return 0;
            let result = node.val >= maxVal ? 1 : 0;
            maxVal = Math.max(maxVal,node.val)
            result += dfs(node.left,maxVal);
            result += dfs(node.right,maxVal);
            return result
        }
        return dfs(root,root.val)
    }
}
