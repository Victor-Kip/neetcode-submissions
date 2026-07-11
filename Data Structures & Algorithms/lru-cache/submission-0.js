class Node{
    value;
    prev;
    next;
    key;
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    lruMap
    constructor(capacity) {
    this.capacity = capacity;
    this.lruMap = new Map();
    this.left = new Node(0,0);
    this.right = new Node(0,0);

    this.right.prev = this.left;
    this.left.next = this.right;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    remove(node){
        let previous = node.prev;
        let nextNode = node.next;
        previous.next = nextNode;
        nextNode.prev = previous;
    }
    insert(node){
        let previous = this.right.prev;
        let nextNode = this.right;
        previous.next = node;
        nextNode.prev = node;
        node.next = nextNode;
        node.prev = previous;
    }
    get(key) {
        if(this.lruMap.has(key)){
            this.remove(this.lruMap.get(key))
            this.insert(this.lruMap.get(key))
            return (this.lruMap.get(key).value);
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.lruMap.has(key)){
            this.remove(this.lruMap.get(key));
        }
        let newNode = new Node(key,value);
        this.insert(newNode);
        this.lruMap.set(key,newNode);
        if(this.lruMap.size > this.capacity){
            let lru = this.left.next;
            this.remove(lru);
            this.lruMap.delete(lru.key)
        }
    }
}
