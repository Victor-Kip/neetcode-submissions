class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (!s || !t || s.length < t.length) return "";
        let tMap = new Map<string, number>();
        let sMap = new Map<string, number>();

        for (let c of t ){
            tMap.set(c, (tMap.get(c) || 0) + 1)
        }
        let have = 0;
        let need  = tMap.size;

        let result = [-1,-1]
        let resultLength = Infinity;

        let left = 0;

        for(let right = 0; right < s.length;right++){
            let r = s[right];
            sMap.set(r, (sMap.get(r) || 0) + 1)
            if(tMap.has(r) && tMap.get(r) === sMap.get(r)){
                have++;
            }
                while(have === need){
                    if(right - left + 1 < resultLength){
                        resultLength = right - left + 1;
                        result = [left, right];
                    }
                    let l = s[left]
                    sMap.set(l, sMap.get(l)! - 1);
                    if (tMap.has(l) && sMap.get(l)! < tMap.get(l)!) {
                        have--;
                    }
                    left++
                }
            
        }
        return resultLength === Infinity ? "" : s.substring(result[0], result[1] + 1);
    }
}
        
    
