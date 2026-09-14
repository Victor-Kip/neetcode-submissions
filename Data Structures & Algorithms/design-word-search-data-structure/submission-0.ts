class WordNode{
    children: Map<string,WordNode>;
    isEndOfWord:boolean;
    constructor(){
        this.children = new Map();
        this.isEndOfWord = false;
    }
}
class WordDictionary {
    root:WordNode
    constructor() {
        this.root = new WordNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let node = this.root;
        for(let ch of word){
            if(!node.children.get(ch)){
                node.children.set(ch,new WordNode());
            }
            node = node.children.get(ch);
        }
        node.isEndOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return this.dfs(word,0,this.root)
    }
    private dfs(word:string,index:number,node:WordNode):boolean{
        if(index == word.length) return node.isEndOfWord;
        let ch = word[index];
        if(ch == "."){
        for(const child of node.children.values()){
            if(this.dfs(word,index+1,child)) return true;
        }
        return false;
        }
        else{
            if(!node.children.get(ch)) return false;
        }
        return this.dfs(word,index + 1,node.children.get(ch)!);
    }
}
