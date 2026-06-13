class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {

        function robRange(range:number[]) {
            let rob1 = 0;
            let rob2 = 0;

            for(let n of range) {
                const temp = Math.max(rob1+n, rob2);
                rob1 =  rob2;
                rob2 = temp;
            }
            return rob2;
        }

        return Math.max(nums[0], robRange(nums.slice(0,nums.length - 1)),robRange(nums.slice(1)));
    }
}
