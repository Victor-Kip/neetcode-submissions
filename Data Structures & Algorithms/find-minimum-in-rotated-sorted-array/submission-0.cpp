class Solution {
public:
    int findMin(vector<int> &nums) {
        auto minElement = min_element(nums.begin(),nums.end());
        int min = *minElement;
        return min;
    }
};
