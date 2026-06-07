class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        unordered_map<int,int> count = {};
        for(int i = 0;i<nums.size();i++){
            count[nums[i]]++;
        }  
        for (auto& c : count){
            if( c.second > 1){
                return true;
            }
            
        }
        return false;
    }
};