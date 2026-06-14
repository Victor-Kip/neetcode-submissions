class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        unordered_map<int, unordered_set<char>> rows;
        unordered_map<int, unordered_set<char>> columns;
        unordered_map<int, unordered_set<char>> squares;

        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                if (board[r][c] == '.') {
                    continue;
                }
                int squareKey = (r / 3) * 3 + (c / 3);
                char val = board[r][c];
                if (rows[r].count(val) || columns[c].count(val) || squares[squareKey].count(val)) {
                    return false;
                }
                rows[r].insert(val);
                columns[c].insert(val);
                squares[squareKey].insert(val);
            }
            }
           return true; 
    }
};
