class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        let path:number[] = [];
        let used:boolean[] =[];
        let result:number[][]=[];
        function backtrack():void{
            if(nums.length === path.length){
                result.push([...path]);
                return;
            }
            for(let i = 0;i<nums.length;i++){
                if(used[i] === true)continue;
                used[i] = true;
                path.push(nums[i]);
                backtrack();
                path.pop();                
                used[i] = false;
            }
        }
        backtrack()
        return result; 
    }
}
