class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length() != t.length()) return false;
        unordered_map<int,int> sCount = {},tCount = {};
        for(int i = 0;i< s.length();i++){
            sCount[s[i]]++;
            tCount[t[i]]++;
        }
        if(sCount == tCount){
            return true;
        }
        return false;
        
    }
};
