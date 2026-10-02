class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const result:string[] = [];
        let path = "";

        function backtrack(openCount:number,closeCount:number):void{
            if(path.length == 2 * n){
                result.push(path);
                return;
            }
            if(openCount < n){
                path += '(';
                backtrack(openCount + 1,closeCount);
                path = path.slice(0,-1);
            }
            if(closeCount < openCount){
                path += ')';
                backtrack(openCount,closeCount + 1)
                path = path.slice(0,-1)
            }
        }
        backtrack(0,0);
        return result;
    }
}
