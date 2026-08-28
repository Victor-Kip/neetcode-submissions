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
        let result:number[][] = [];
        if(!root) return result
        const myQ = new Queue()
        myQ.enqueue(root);
        while(!myQ.isEmpty()){
            let qLength = myQ.size()
            let level:number[] = [];
            for(let i = 0; i < qLength;i++){
                let node = myQ.dequeue();
                if(node){
                    level.push(node.val);
                    if(node.left)myQ.enqueue(node.left);
                    if(node.right)myQ.enqueue(node.right);
                }
            }
             result.push(level);
        }
        return result;
    }
}
