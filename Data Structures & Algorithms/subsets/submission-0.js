class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];
        function backtrack(idx,current) {
            result.push([...current]);

            for(let i=idx;i<nums.length;i++) {
                current.push(nums[i]);
                backtrack(i+1,current);
                current.pop();
            }
        }
        backtrack(0,[])
        return result;
    }
}
