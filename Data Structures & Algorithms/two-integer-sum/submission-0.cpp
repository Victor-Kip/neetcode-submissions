class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> visitedNumbers = {};
        for (int i = 0;i<= nums.size();i++){
            int difference  = target - nums[i];
            if(visitedNumbers.find(difference) != visitedNumbers.end()){
                return {visitedNumbers[difference],i};
            }
            else{
                visitedNumbers[nums[i]] = i;
            }
        }
        return {};
        
    }
};
