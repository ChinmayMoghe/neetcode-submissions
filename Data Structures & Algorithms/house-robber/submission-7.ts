class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
      let rob1:number = 0 ; let rob2:number = 0;
      for(let n of nums) {
        let temp = Math.max(n+rob1,rob2);
        rob1 = rob2;
        rob2 = temp;
      }
      return rob2;
    }
}
