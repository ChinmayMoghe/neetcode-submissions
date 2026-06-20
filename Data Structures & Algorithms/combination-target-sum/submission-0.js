class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const out = [];
        nums.sort((a,b)=> a - b);
        function dfs(i, currList, total) {
            if(total === target) {
                out.push([...currList]);
                return;
            }

            for(let j=i;j<nums.length;j++) {
                if(total+nums[j] > target) {
                    return;
                }
                currList.push(nums[j]);
                dfs(j,currList, total+nums[j]);
                currList.pop()
            }
        }
        dfs(0,[],0);
        return out;
    }
}
