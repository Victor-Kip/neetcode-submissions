class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a,b)=>a-b);
        let result:number[][] = [] ;
        let path:number[] = [];
        function backtrack(start:number,remaining:number):void{
            if(remaining === 0){
                result.push([...path])
                return
            }
            for(let i = start;i < candidates.length;i++){
                if(candidates[i] > remaining) break
                if(i > start && candidates[i] === candidates[i-1]) continue;
                path.push(candidates[i]);
                backtrack(i+1,remaining-candidates[i]);
                path.pop();
            }
        }
        backtrack(0,target)
        return result
    }
}
