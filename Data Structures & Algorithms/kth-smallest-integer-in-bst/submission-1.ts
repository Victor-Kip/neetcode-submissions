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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let  count = 0;
        let myStack:TreeNode[] = [];
        let curr = root;
        while(curr !== null || myStack.length > 0){
            while(curr !== null){
                myStack.push(curr);
                curr = curr.left;
            }
            curr = myStack.pop()
            count += 1;
            if(count == k) return curr.val
            curr = curr.right
        }
    }
}
