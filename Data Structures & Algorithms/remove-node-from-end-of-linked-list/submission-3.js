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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummyNode = new ListNode();
        dummyNode.next = head;
        let fast = dummyNode;
        let slow = dummyNode;
        let i = 1;
        while(fast.next && i <= n){
            fast = fast.next;
            i++;
        }
        while(fast.next){
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return dummyNode.next;
    }
}
