class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
      const cache = new Map();
      function dp(i) {
        if(i>=nums.length) {
            return 0;
        }
        let result;
        if(cache.has(i)) {
           return cache.get(i);
        }
         result = Math.max(nums[i] + dp(i+2),dp(i+1));
         cache.set(i,result);
        return result;
      }
      return dp(0);
    }
}
