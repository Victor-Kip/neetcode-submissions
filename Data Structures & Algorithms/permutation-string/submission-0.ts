class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {

        let target:number[]= new Array(26).fill(0);
        let window:number[]= new Array(26).fill(0);

        for (let char of s1){
            let index =char.charCodeAt(0) - 97
            target[index]++;
        }
        let left = 0;
        let matches = 0;
        for(let i = 0;i<26;i++){
            if(window[i] == target[i]) matches++;
        }
        for (let right = 0;right<s2.length;right++){
            let right_idx = s2[right].charCodeAt(0)-97;
            if(window[right_idx] == target[right_idx]) matches--;
            window[right_idx]++;
            if(window[right_idx] == target[right_idx]) matches++;
            if(right - left + 1 > s1.length){
                let left_idx = s2[left].charCodeAt(0)-97;
                if(window[left_idx] == target[left_idx]) matches--;
                window[left_idx]--;
                if(window[left_idx] == target[left_idx]) matches++;
                left++;
            }
            if(matches == 26) return true
        }



        return false;
    }
}
