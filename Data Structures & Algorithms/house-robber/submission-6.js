class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
      // dp array solution
      if(nums.length === 0) return 0;
      if(nums.length === 1) return nums[0];
      const dp = Array.from({length:nums.length}).fill(0);

      dp[0] = nums[0];
      dp[1] = Math.max(nums[0],nums[1]);

      for(let i=2;i<nums.length;i++) {
        dp[i] = Math.max(dp[i - 1],nums[i] + dp[i - 2]);
      }
      return dp[nums.length - 1];
    }
}


/**
 * Intution and framing of the problem
 * 
 * We should think this in terms of calculating the maximum profit at given position i
 * 
 * But even before maximizing this profit , what can it be ?
 * 
 * So lets say I am at ith position what could I do ? 
 * 
 * 1. Skip it 
 * 2. rob it 
 * 
 * 1. if I skip it , it means I have robbed at dp[i - 1]
 * 2. if I rob it, it means I have to definitely rob at [i - 2] .i.e. nums[i]+dp[i -2];
 * 
 * Now we want max of both 
 * 
 * Math.max(dp[i-1],nums[i] + dp[i -2]);
 * 
 * this will give us the max profit at dp[n -1] // since at the end of array we would have reached at max profit (either if we have skipped or robbed it does not matter)
 * 
 * Edge cases: 
 * 
 * dp[0] = nums[0]
 * dp[1] = Math.max(nums[0],nums[1]);
 * 
 * in case of only house return nums[0]
 */