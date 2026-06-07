class Solution {
public:
    int maxArea(vector<int>& heights) {
        int left = 0;
        int right = heights.size()-1;
        int maxArea = 0;
        while(left<right){
            int width = right - left;
            int height = min(heights[left],heights[right]);
            int area = width * height;
            maxArea = max(maxArea,area);
            if(heights[left] < heights[right]){
                left++;
            }
            else if(heights[left] > heights[right]){
                right--;
            }
            else{
                left++;
            }
        }
        return maxArea;
    }

};
