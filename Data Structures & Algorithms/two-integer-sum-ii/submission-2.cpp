class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int left = 0;
        int right = 1;
        while(left < right){
            if(numbers[left] + numbers[right] == target){
                return {left+1,right+1};
            }
            else right++;
            if(right == numbers.size()){
                left++;
                right = left+1;
            }
        }
        return {};
        
    }
};
