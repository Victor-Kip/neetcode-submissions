class Solution {
public:
    bool isValid(string s) {
        stack<char> myStack;
        unordered_map<char,char> myMap =
         {
            {')', '('},
            {']', '['},
            {'}', '{'}
            };
        
        for(char c : s){
            if(myMap.find(c) != myMap.end()){
                if(!myStack.empty() && myStack.top() == myMap[c]){
                myStack.pop();
            }
            else return false;
            }
            else{
                myStack.push(c);
            }
        }
        if(myStack.empty()){
            return true;
        }
        else{
            return false;
        }
    }
};
