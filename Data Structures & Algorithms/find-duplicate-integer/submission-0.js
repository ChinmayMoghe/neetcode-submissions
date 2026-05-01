class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let [slow, fast] = [0,0];

        while(true) {
            slow = nums[slow];
            fast = nums[nums[fast]];

            if(slow === fast) {
                break;
            } 
        }

        let slow2 = 0;

        while(true) {
            slow = nums[slow];
            slow2 = nums[slow2];

            if(slow == slow2) {
                return slow;
            }
        }

    }
}

/* 

This is absolute mindfuck problem - Let god have mercy on your soul and self-esteem if this is asked by some jackass interviewer

1. Array length is n+1
2. Each integer is in the range [1,n] inclusive

so if array length = 5 , numbers would be from 1 to 4  arr = [1,2,3,2,2]


every integer appears exactly once, except for one integer that can repeat two or more times, we need to return the integer that repeats 

idx =  0,1,2,3,4 
arr = [1,2,3,2,2]

so since we have numbers starting from 1 and extend till n (inclusive), and idx will run from 0 -> n (since array length is n+1),

we can say that numbers in array will always fall in the range of indices 

so if try to create a link between the numbers considering that each number at given index is pointer to next node , we will get a linked list of sort 

and since there is repetition of numbers we will also have a cycle and the cycle starts where the first instance of duplicate number is


2nd part of this problem after landing on the part that its a fucking linked list problem is to be able to find the start of a cycle , 
so we use Floyd's Cycle Finding / Detection algorithm

Process for finding the start of the cycle 

1. Run a slow, fast pointer on the list 
2. when slow and fast pointer meet (the intersection point) its the same distance away from the start of cycle as the head 

3. We use property from point 2 and run a second slow pointer and at some point they will intersect and that will be the first duplicate number ! fucking non intuitive, god help me if
some asshole asks me this in interview

*/