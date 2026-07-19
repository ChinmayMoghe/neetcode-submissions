class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0;
        let results = [];
        for(let right = 0;right < nums.length;right++) {
            if(right - left+ 1 === k) {
                results.push(Math.max(...nums.slice(left, right+1)));
                left+=1;
            }
        }
        return results;
    }
}
