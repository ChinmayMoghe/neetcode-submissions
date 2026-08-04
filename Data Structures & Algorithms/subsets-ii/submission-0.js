class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    constructor() {
        this.res = [];
    }
    subsetsWithDup(nums) {
        /*sort the numbers*/
        nums.sort((a,b)=> a - b);
        this.backtrack(0,[],nums);
        return this.res;
    }

    backtrack(i, subset, nums) {
        if(i === nums.length ) {
            this.res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        this.backtrack(i+1, subset,nums);
        subset.pop();

        while(i+1 < nums.length && nums[i] === nums[i+1]) {
            i+=1;
        }
        this.backtrack(i+1,subset,nums);
    }
}
