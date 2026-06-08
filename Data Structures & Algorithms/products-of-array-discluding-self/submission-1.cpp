class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
            int lMultiple = 1;
        int rMultiple = 1;
        int size = nums.size();

        vector<int> result(size);


        for(int i = 0; i<size;i++){

            result[i] = lMultiple;
            lMultiple *= nums[i];
            
        }
        for(int j = size - 1;j >= 0;j--){
            result[j] = result[j] * rMultiple;
            rMultiple *= nums[j];
        }
         
        return result;
    }
};
