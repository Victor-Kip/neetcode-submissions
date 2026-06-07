class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int,int> count;
        for(int i : nums){
            count[i]++;
        }
        vector<vector<int>> buckets(nums.size()+1);
        for(auto &x: count){
            buckets[x.second].push_back(x.first);
        }
        vector<int> result;
        for(int i = buckets.size()-1;result.size() < k;i--){
            for(int j : buckets[i]){
                result.push_back(j);
            }
        }
        return result;
        
    }
};
