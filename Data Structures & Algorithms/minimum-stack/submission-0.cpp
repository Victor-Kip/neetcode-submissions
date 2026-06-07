class MinStack {
public:
    stack<int>myStack ;
    stack<int> minStack;
    int base = 0;
    MinStack() {
        
    }
    
    void push(int val) {
        myStack.push(val) ;
        int minVal;
        if(!minStack.empty()) minVal = min(val,minStack.top());
        else minVal = val;
        minStack.push (minVal);
    }
    
    void pop() {
        myStack.pop();
        minStack.pop();
        
    }
    
    int top() {
       
        return myStack.top();
        return minStack.top();
    }
    
    int getMin() {
        return minStack.top();
    }
};
