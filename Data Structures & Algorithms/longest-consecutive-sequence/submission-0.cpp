class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> mySet(nums.begin(),nums.end());
        int longest = 0;
        for (int i: nums){
            if( mySet.find(i - 1) == mySet.end()){
                int length = 1;
                while(mySet.find(i + length) != mySet.end()){
                    length++;
                    
                }
                longest = max(longest,length);
            }
        }
        return longest;
    }
};
