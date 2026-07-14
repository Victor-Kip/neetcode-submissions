/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummyNode = new ListNode(0,head);
        let groupPrev = dummyNode;
        while( true){
            let kthNode = this.getKth(groupPrev,k);
            if (!kthNode) break;
            let groupNext = kthNode.next;

            let prev = kthNode.next;
            let curr = groupPrev.next;
            while(curr != groupNext){
                var tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = tmp;
            }
            tmp = groupPrev.next;
            groupPrev.next = kthNode;
            groupPrev = tmp;

        }
        return dummyNode.next;
    }
    getKth(curr,k){
        while(curr && k > 0){
            curr = curr.next;
            k--;
        }
        return curr;
    }
}
