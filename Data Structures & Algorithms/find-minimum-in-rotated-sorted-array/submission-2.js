class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0; 
        let right = nums.length - 1;
        let min = nums[0];

        while(left <= right) {
           if(nums[left] < nums[right]) {
            min = Math.min(min, nums[left]);
            break;
           }
           const mid = left + Math.floor((right - left) / 2);
           min = Math.min(min, nums[mid]);
           if(nums[mid] >= nums[left]) {
             left = mid + 1;
           } else {
            right = mid - 1;
           }
        }
        return min
    }
}


/*
[3,4,5,1,2]
 L   M   R  

// find the minimum 

- Array of length n is sorted
- can be rotated between 1 to n times 

1 rot - [5,1,2,3,4] - (l-0,m-2,r-4) , (l-0,m-1,r-2), (l-0, r-1, m-0) (l-1,r-1) -> exit loop 
2 rot - [4,5,1,2,3]
3 rot - [3,4,5,1,2]
4 rot - [2,3,4,5,1]
5 rot - [1,2,3,4,5]

for each rotation observe that the smallest moves towards the end of array except for where rotation is n 

in case of rotations 

if M >= L - means the array is rotated and we are looking at the rotated items - move towards right -> so as to find the first half of sorted array 
else - it means we are in the smaller half of sorted array where smallest number lies -> move towards left -> so as to find minimum




*/