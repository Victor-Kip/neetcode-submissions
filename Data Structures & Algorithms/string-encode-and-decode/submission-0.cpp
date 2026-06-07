class Solution {
public:

    string encode(vector<string>& strs) {
        std::string s ;
        for(std::string v: strs){
            s += to_string(v.length());
            s += "#";
            s += v;
        }
    return s;
    }

    vector<string> decode(string s) {
    vector<string> myVector;

    int i = 0;
    while(i < s.length()){
        size_t delimitPosition = s.find("#",i);
        int length = stoi(s.substr(i, delimitPosition - i));
        i = delimitPosition + 1;
        string str = s.substr(i,length);
        myVector.push_back(str);
        i+=length;

    }
    return myVector;

    }
};
