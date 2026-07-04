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
     * @return {void}
     */
    reorderList(head) {
        let fast = head;
        let slow = head;

        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }
        
        let l2prev = null;
        let l2curr = slow.next;
        slow.next = null;
        while(l2curr){
        let nxt = l2curr.next;
        l2curr.next = l2prev;
        l2prev = l2curr;
        l2curr = nxt;
        }
        let l1 = head;
        let l2 = l2prev;
        let l1next;
        let l2next;
        while(l2){
            l1next = l1.next;
            l2next = l2.next;
            l1.next = l2;
            l2.next = l1next;
            l1 = l1next;
            l2 = l2next;

        }
    }
}
