class Solution {
   public:
    int largestRectangleArea(vector<int>& heights) {
        int maxArea = 0;
        int hSize = heights.size();
        stack<pair<int, int>> myStack;

        for (int i = 0; i < hSize; i++) {
            int start = i;
            while (!myStack.empty() && myStack.top().second > heights[i]) {
                int index = myStack.top().first;
                int height = myStack.top().second;
                myStack.pop();
                maxArea = max(maxArea, (height * (i - index)));
                start = index;
            }
            myStack.push({start, heights[i]});
        }
        while(!myStack.empty()){
            int index = myStack.top().first;
            int height = myStack.top().second;
            myStack.pop();
            maxArea = max(maxArea,(height * (hSize - index)));
        }
        return maxArea;

    }
};
