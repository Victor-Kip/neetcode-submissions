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
    maxDepth(root: TreeNode | null): number {
        let leftDepth:number;
        let rightDepth:number
        if(!root) return 0;
        if(!root.right && !root.left) return 1;
         leftDepth =  this.maxDepth(root.left);
         rightDepth =  this.maxDepth(root.right);

         return 1 + Math.max(rightDepth,leftDepth);
    }
}
