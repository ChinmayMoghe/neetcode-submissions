class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while(left <= right) {
            const mid = left + Math.trunc((right - left) / 2);

            if(nums[mid]===target) {
                return mid;
            }

            if(nums[left] <= nums[mid]) {
                if(target > nums[mid] || target < nums[left]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                if(target < nums[mid] || target > nums[right]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }

        }
    return -1;
    }

}


/*

Binary search in a partial sorted array 

2 possibilities 

1. rotate n times - same as original
2. rotated <n times - not same as original

case 1. rotated n times (so sorted ascending)

good old binary search works here mid = low + Math.trunc((high - low)/2);


case 2. rotated < n times (so there is a split between somewhere)

3,4,5,6,1,2  t=1

in case of rotations < n , there will exist 2 segments 

1 rot = 2,3,4,5,6,1  seg1 = 2,3,4,5,6 seg2=1
2 rot = 3,4,5,6,1,2  seg1 = 3,4,5,6   seg2=1,2
3 rot = 4,5,6,1,2,3  seg1 = 4,5,6     seg2=1,2,3
4 rot = 5,6,1,2,3,4  seg1 = 5,6       seg2=1,2,3,4
5 rot = 6,1,2,3,4,5  seg1=6           seg2=1,2,3,4,5

first problem is selection of segement where target might exist


l=0, r=5, m=2 arr[m]=5 arr[l]=3 arr[r]=2





*/