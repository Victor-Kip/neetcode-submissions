class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if (matrix.empty() || matrix[0].empty()) return false;
        int rows = matrix.size();
        int columns = matrix[0].size() ;

        int topRow = 0;
        int bottomRow = rows - 1;
        int targetRow = -1;

        while(topRow <= bottomRow){
            int midRow = topRow + (bottomRow - topRow)/2;
            if(matrix[midRow].back() < target ){
                topRow = midRow + 1;
            }
            else if (matrix[midRow][0] > target ){
                bottomRow = midRow - 1;
            }
            else{
                targetRow = midRow;
                break;
            }
        }
        if(targetRow == -1){
            return false;
        }
        
        int left = 0;
        int right = columns - 1;
        int midRow = targetRow;
        while(left <= right){
            int mid = left + (right - left )/ 2;
            if(matrix[midRow][mid] == target){
                return true;
            }
            if(matrix[midRow][mid] > target){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        }
        return false;
    }
};
