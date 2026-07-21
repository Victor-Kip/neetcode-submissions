class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let mySet = new Set();
        let left = 0;
        let result = 0;
        for(let right = 0;right < s.length;right++){
            while(mySet.has(s[right])){
                mySet.delete(s[left]);
                left++;
            }
            mySet.add(s[right]);
            result = Math.max(result,right - left + 1);
        }
        return result;
    }
}
