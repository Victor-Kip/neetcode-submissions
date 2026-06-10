 class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> myStack;
        
        for (const string& token : tokens) {
            if (token == "+" || token == "-" || token == "*" || token == "/") {

                int a = myStack.top(); myStack.pop();
                int b = myStack.top(); myStack.pop();
                
                if (token == "+") myStack.push(b + a);
                else if (token == "-") myStack.push(b - a);
                else if (token == "*") myStack.push(b * a);
                else if (token == "/") myStack.push(b / a);
            } 
            else {
           
                myStack.push(stoi(token));
            }
        }
        
        return myStack.top();
    }
};