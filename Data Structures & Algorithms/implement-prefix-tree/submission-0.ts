class PrefixTreeNode{
    children:Map<string,PrefixTreeNode>;
    isEndOfWord:boolean

    constructor(){
        this.children = new Map();
        this.isEndOfWord = false
    }
}
class PrefixTree {
    root:PrefixTreeNode;
    constructor() {
        this.root = new PrefixTreeNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let curr = this.root
        for(const ch of word){
            if(!curr.children.has(ch)){
                curr.children.set(ch,new PrefixTreeNode)
            }
            curr = curr.children.get(ch)!;
        }
        curr.isEndOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        const node = this.traverse(word)
        return node != null && node.isEndOfWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        return this.traverse(prefix) != null
    }
    private traverse(str:string):PrefixTreeNode | null{
        let curr = this.root
        for(const ch of str){
            if(!curr.children.has(ch))return null
            curr  = curr.children.get(ch)
        }
        return curr
    }
}
