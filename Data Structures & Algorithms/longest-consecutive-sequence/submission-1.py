class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)
        longest = 0

        for num in nums:
            if(num - 1 in num_set):
                continue;
            length = 0
            x=num
            while x in num_set:
                length+=1
                x+=1
            longest = max(longest,length)
        
        return longest




# Solution approach

# sorting the array -> O(nlog(n)) -> makes it easier to detect longest consecutive sequence 

# [2,3,4,4,5,10,20]

# Loop through the array 
# keep longest = 1;
# keep count = 1;
# for each arr[i], check if arr[i+1] == arr[i] +1 - yes then -> length+=1 
#  if no -> then longest = max(longest, length); then reset length to 1
# Time complexity in this is case is O(n log(n)) -> i.e. the time complexity of the sort algorithm

# without sorting - using a hashset

# what we know 
# if we don't have x-1 in the set, then x is the starting point
# once we have the starting point -> we keep looking for x+1 
# we keep track of length , if we don't find x+1, then we compare the length with longest  and longest = max(length, longest); length  = 1;
# at the end of loop we return the length of longest consecutive sequence
