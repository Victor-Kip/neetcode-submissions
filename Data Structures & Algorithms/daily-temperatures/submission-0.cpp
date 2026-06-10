class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        vector<int> result(temperatures.size());

        stack<pair<int,int>> myStack;

        for(int i = 0; i < temperatures.size(); i++){
            while(!myStack.empty() && temperatures[i] > myStack.top().first){
                result[myStack.top().second] = i - myStack.top().second;
                myStack.pop();
            }
            myStack.push({temperatures[i],i});
        } 
        return result;
    }
};
