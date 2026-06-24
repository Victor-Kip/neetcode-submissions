class TimeMap {
public:
    unordered_map<string,vector<pair<string, int>>> timeMap;
    
    TimeMap() {
        
    }
    
    void set(string key, string value, int timestamp) {
        timeMap[key].push_back({value,timestamp});   
    }
    
    string get(string key, int timestamp) {
        if (timeMap.find(key) == timeMap.end()) {
            return "";
        }
        int left = 0;
        int right = timeMap[key].size() - 1 ;
        string res;
        const auto& values = timeMap[key];
        while (left <= right){
            int mid = left + (right - left)/2;
            if(values[mid].second == timestamp){
                return timeMap[key][mid].first;
            }
            else if(values[mid].second < timestamp){
                res = values[mid].first;
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }
        return res;
    }
};
