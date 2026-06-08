class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int lMultiple = 1;
        int rMultiple = 1;
        int size = nums.size();

        vector<int> lVector(size);
        vector<int> rVector(size);

        for(int i = 0; i<size;i++){
            int j = size - i - 1;

            lVector[i] = lMultiple;
            rVector[j] = rMultiple;

            lMultiple *= nums[i];
            rMultiple *= nums[j];
        }
        vector<int> result(size);
        int k = 0;
        while(k < size){
            result[k] = lVector[k] * rVector[k];
            k++;
        }
        return result;
    }
};
