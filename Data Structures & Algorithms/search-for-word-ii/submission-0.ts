class TrieNode {
    children: Map<string,TrieNode>;
    word:string | null;
    constructor() {
        this.children = new Map();
        this.word = null ;
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        const root = new TrieNode()
        
        for(const word of words){
            let curr = root;
            for(const ch of word){
                if(!curr.children.has(ch)){
                    curr.children.set(ch,new TrieNode());
                }
                curr = curr.children.get(ch);
            }
        curr.word = word;
        }
        const rows = board.length;
        const cols = board[0].length;
        const result:string[] = [] ;
        
        function dfs(row:number,column:number,node:TrieNode):void{
            const ch = board[row][column];
            if(!node.children.has(ch)) return;
            const nextNode = node.children.get(ch);
            if(nextNode.word !== null){
                result.push(nextNode.word);
                nextNode.word = null
            }
            board[row][column] = '#';

            const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
            for(const[dr,dc] of dirs){
                const nr = dr + row ;
                const nc = dc + column;
                if(nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] !== "#" ) dfs(nr,nc,nextNode);
            }
            board[row][column] = ch;
        }
        for (let r = 0;  r < rows;r++){
            for(let c = 0;c < cols; c++){
                dfs(r,c,root);
            }
        }
        return result;
}}
