class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let smaller = nums1;
        let larger = nums2;
        const total = smaller.length + larger.length;

        const half = Math.floor(total /2);

        if(smaller.length > larger.length) {
            [larger,smaller] = [smaller,larger]
        }

        let l=0;
        let r=smaller.length - 1;

        while(true) {
            const i = Math.floor((l+r)/2); // for smaller array
            const j = half - i - 2; // for larger array

            const smallLeft = smaller[i] ?? -Infinity;
            const smallRight = smaller[i+1] ?? Infinity;
            const largeLeft = larger[j] ?? -Infinity;
            const largeRight = larger[j+1] ?? Infinity;


            if(smallLeft <= largeRight && largeLeft <= smallRight) {
                if(total % 2) {
                    return Math.min(smallRight, largeRight)
                }
                return (Math.max(smallLeft,largeLeft) + Math.min(smallRight,largeRight)) / 2;
            } else if(smallLeft > largeRight) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }
    }
}
