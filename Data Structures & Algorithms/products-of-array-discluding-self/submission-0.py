class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        out= [1] * len(nums)

        #prefix mult pass

        for i in range(1, len(nums)):
            out[i] *= out[i - 1] * nums[i - 1]

        print(out)

        # suffix mult pass
        suffix_mult = 1;

        for j in range((len(nums) - 1), -1, -1):
            out[j] *= suffix_mult
            suffix_mult *= nums[j]   

        return out



# Intuition

# Given array [1,2,4,6] find the product array except self 

# So for i=2 (i.e. 4), its going to be 1x2x6 = 12
# similarly for i=1 (i.e. 2) its going to be 1x4x6 = 24
# ...so on and so forth
# 
# What we know is that the multiplication should exclude self 
# 
# So how can we do this ? 
# 
# Naive approach: 
#
# out = []
# Outer loop i: 
#   inner loop j: 
#      if i=j: 
#        continue: 
#      else:
#        out[i]*=input[j] 
# i = 0 ,j = 0 , skip
# i = 0, j = 1, out[i]=1 , out[i] = 2
# i = 0, j = 2, out[i] = 2, out[i] = 2*4 = 8
# i = 0, j = 3, out[i] = 8, out[i] = 8*6 = 48
#
# Overall time complexity is O(n^2) and space complexity is O(n)
#
#
# Optimized approach: 
#
# we know that for every i, the product is (product of past nums) and (product of next nums)
# 
# What if we keep these in two different arrays and just multiply them ? 
#
# so we do prefix_mult = [1,1,1,1]
# 
# i = 0; 

# arr = [1,2,4,6]
# 
# while(i < arr.length) {
#    prefix_mult[i] *= (prefix_mult[i - 1] ?? 1) * arr[i - 1];    
# }
#
# i = 0, prefix_mult[i] = 1 , arr[i - 1] = None, prefix_mult[0] = 1
# i = 1, prefix_mult[i] = 1, arr[0] = 1, prefix_mult[1] = 1
# i = 2, prefix_mult[i] = 1, arr[1] = 2, prefix_mult[2] = 1* 2 = 2
# i = 3, prefix_mult[i] = 1, arr[2] = 4, prefix_mult[3] = 2*4 = 8
#
# we get prefix_mult = [1,1,2,8]
#
# similarly we want to create a suffix_mult = [48,24,6,1], we iterate in reverse and use suffix to get mult of nums after given arr[i]
#
# now for each i
#
# out[i] = prefix_mult[i]*suffix_mult[i]
# 
# Here time complexity is a lot better O(n) and space complexity is O(2*n) ~~ O(n)