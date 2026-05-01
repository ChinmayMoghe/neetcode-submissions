class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
          num_map = {}

          for idx in range(len(nums)):
            complement = target - nums[idx]

            if complement in num_map:
                return [num_map[complement], idx]
            

            num_map[nums[idx]] = idx;
        