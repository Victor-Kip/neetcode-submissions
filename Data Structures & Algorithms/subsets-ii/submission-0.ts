class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
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
            let next = index;
            while(index < nums.length && nums[index] == nums[next]){
                next++;
            }
            backtrack(next)

        }
        backtrack(0);
        return result;
    }
}
