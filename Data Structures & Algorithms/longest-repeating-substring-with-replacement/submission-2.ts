class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let result = 0;
        let left  = 0;
        let right = 0;
        let subMap = new Map();
        let maxCount = 0;

        while(right < s.length){
            let char = s[right];
            subMap.set(s[right],(subMap.get(char) || 0) +1)
            maxCount = Math.max(maxCount, subMap.get(char));
            let size = right-left + 1;
            if(size - maxCount > k){
                let leftChar = s[left];
                subMap.set(leftChar,subMap.get(leftChar)-1);
                left++;
                
            }
            result = Math.max(right-left+1,result);
            right++;
        }

        return result;
    }
}
