class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length === 0) {
            return -1;
        }
        if(nums.length === 1) {
            return nums[0] === target ? 0: -1;
        } 
        let result = -1;
        let left = 0;
        let right = nums.length - 1;
        while(left <= right) {
            let mid = Math.trunc((right + left)/2);
            console.log({left,mid,right});
            if(target > nums[mid]) {
                left = mid + 1;
            } else if(target < nums[mid]) {
                right = mid - 1;
            } else {
                result = mid;
                break;
            }
        }
        return result;
    }
}
