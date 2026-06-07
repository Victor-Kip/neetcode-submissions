class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        unordered_set<int> visitedNumbers;
        for (int i = 0;i < nums.size();i++){
            if(visitedNumbers.find(nums[i]) != visitedNumbers.end()){
                return true;
            }
            visitedNumbers.insert(nums[i]);
        }
        return false;
    }
};