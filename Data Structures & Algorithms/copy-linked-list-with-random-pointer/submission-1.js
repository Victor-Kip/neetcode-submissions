// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if( !head ) return null;
        let listMap = new Map();
        let current = head;
        while(current){
            let copy = new Node(current.val);
            listMap.set(current,copy);
            current = current.next;
        }
        let cur = head;
        while(cur){
            let copy = listMap.get(cur);
            copy.next = cur.next ? listMap.get(cur.next) : null;
            copy.random = cur.random ? listMap.get(cur.random) : null;
            cur = cur.next;
        }
        return listMap.get(head);
    }
}
