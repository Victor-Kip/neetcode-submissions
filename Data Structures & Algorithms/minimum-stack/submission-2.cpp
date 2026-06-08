class MinStack {
    private:
    vector<vector<int>> myStack;
public:
    MinStack() {
        
    }
    
    void push(int val) {
        int minVal = getMin();
        if(myStack.empty()) minVal = val;
        else minVal = min(val,minVal);
        myStack.push_back({val,minVal});
    }
    
    void pop() {
        myStack.pop_back();
    }
    
    int top() {
        return myStack.back()[0];
    }
    
    int getMin() {
        return myStack.empty() ? -1 :  myStack.back()[1];
    }
};
