class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }
        
        const m = nums1.length;
        const n = nums2.length;
        const total = m + n;
        const half = Math.floor((total + 1) / 2);
        
        let left = 0;
        let right = m;  
        
        while (left <= right) {
            const i = Math.floor((left + right) / 2);
            const j = half - i;
            
            const left1 = (i === 0) ? Number.NEGATIVE_INFINITY : nums1[i - 1];
            const right1 = (i === m) ? Number.POSITIVE_INFINITY : nums1[i];
            const left2 = (j === 0) ? Number.NEGATIVE_INFINITY : nums2[j - 1];
            const right2 = (j === n) ? Number.POSITIVE_INFINITY : nums2[j];

            if (left1 > right2) {
                right = i - 1;
            } else if (left2 > right1) {
                left = i + 1;
                
            } else {
                const maxLeft = Math.max(left1, left2);
                const minRight = Math.min(right1, right2);
                
                if (total % 2 === 1) {
                    return maxLeft;
                } else {
                    return (maxLeft + minRight) / 2;
                }
            }
        }
        return 0;
    }
}
