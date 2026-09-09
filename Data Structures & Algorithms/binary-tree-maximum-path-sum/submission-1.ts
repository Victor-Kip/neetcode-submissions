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
    maxPathSum(root: TreeNode | null): number {
        var maxNum = Number.NEGATIVE_INFINITY;
        function solve(node:TreeNode|null):number{
            if(!node) return 0;
            let leftA = Math.max(solve(node.left),0);
            let rightA = Math.max(solve(node.right),0);
            let B = node.val + leftA + rightA;
            maxNum = Math.max(maxNum,B);
            let A = node.val +Math.max(leftA,rightA);
            return A
        }
        solve(root);
        return maxNum
    }
}
