class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> myStack;
        for(int i = 0;i < tokens.size();i++){
            if((tokens[i] == "+") || (tokens[i] == "-") || (tokens[i] == "*") || (tokens[i] == "/") ){
                int a = myStack.top();
                myStack.pop();
                int b = myStack.top();
                myStack.pop();
                if(tokens[i] == "+"){
                    myStack.push(a + b);
                }
                else if(tokens[i] == "-"){
                    myStack.push(b - a);
                }
                else if(tokens[i] == "*"){
                    myStack.push(a * b);
                }
                else if(tokens[i] == "/"){
                    myStack.push(b / a);
                }
                else{
                    continue;
                }
                }
            
            else{
                myStack.push(stoi(tokens[i]));
            }
        }
        return myStack.top();
    }
};
