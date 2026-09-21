class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
         nums.sort((a, b) => a - b);
        const path:number[] = [];
        const result:number[][] = [];

        function backtrack(start:number,remaining:number):void{
            if(remaining === 0){
                result.push([...path]);
                return;
            }
            for(let i = start;i < nums.length;i++){
                if(nums[i] > remaining) break;
                path.push(nums[i]);
                backtrack(i,remaining - nums[i]);
                path.pop();
            }
        }
        backtrack(0,target);
        return result;
    }
}
