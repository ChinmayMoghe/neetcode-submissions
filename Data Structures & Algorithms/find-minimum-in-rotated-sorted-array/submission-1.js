class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0; 
        let right = nums.length - 1;

        while(left <= right) {
            if (nums[left] > nums[right]) {
                left+=1;
            }  else {
                return nums[left];
            }
        }
    }
}


/*
[3,4,5,1,2]
 L   M   R  

// find the minimum 

- Array of length n is sorted
- can be rotated between 1 to n times 

1 rot - [5,1,2,3,4]
2 rot - [4,5,1,2,3]
3 rot - [3,4,5,1,2]
4 rot - [2,3,4,5,1]
5 rot - [1,2,3,4,5]

for each rotation observe that the smallest moves  towards the end of array except for where rotation is n 

but in case the array is rotated it divides array such that 

L > M > R -> so M becomes an inflection point,  that divides the array in two parts 

we have to find M when above condition is true

for n rotations - above condition does not work - since the array is perfectly sorted 


*/