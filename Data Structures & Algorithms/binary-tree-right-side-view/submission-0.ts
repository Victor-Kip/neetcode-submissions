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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        let result:number[] = []
        let myQ:TreeNode[] = []
        myQ.push(root);
        while(myQ.length != 0){
            let qLength = myQ.length;
            let rightSide = null;
            for(let i = 0; i < qLength;i++){  
                let node = myQ.shift()
                if(node){
                    rightSide = node;
                    if(node.left)myQ.push(node.left)
                    if(node.right)myQ.push(node.right)
                }}
                if(rightSide) result.push(rightSide.val);
            }
            
        return result
    }
}
