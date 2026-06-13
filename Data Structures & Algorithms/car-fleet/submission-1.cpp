class Solution {
public:
    int carFleet(int target, vector<int>& position, vector<int>& speed) {
        int n = position.size();
        if(n == 0) return 0;

        vector<pair<int,int>> combine;
        stack<double> myStack;
        for(int i= 0; i < n;i++){
            combine.emplace_back(position[i],speed[i]);
        } 
        sort(combine.begin(),combine.end());
        for(int j = n - 1; j>=0;j--){
            double time = (double)(target - combine[j].first)/combine[j].second;
            myStack.push(time);
            if(myStack.size() >= 2){
                double currentCartime = myStack.top();
                myStack.pop();
                if(myStack.top() < currentCartime ){
                    myStack.push(currentCartime);
                }  
            }

        }   
        return myStack.size();
    }
};
