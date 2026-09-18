class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const result:number[][] = [];
        const path:number[] = [];

        function backtrack(index:number):void{
            if(index === nums.length){
                result.push([...path]);
                return
            }
            path.push(nums[index]);
            backtrack(index+1);
            path.pop();
            backtrack(index + 1);
        }
        backtrack(0);
        return result;
    }
}
