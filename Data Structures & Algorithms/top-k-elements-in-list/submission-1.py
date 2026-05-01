class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq_map = {}
        freq_arr = [None] * (len(nums) + 1) 

        # step 1: count frequencies for each num in nums, keep a num: freq count hashmap

        for num in nums:
            if num in freq_map:
                freq_map[num]+=1
            else:
                freq_map[num]=1

        # step 2: using freq count as idx in freq arr -> add nums to it so that each idx is frequency and its value is the number

        for num, freq in freq_map.items():
            if(freq_arr[freq] == None):
                freq_arr[freq] = [num]
            else:
                freq_arr[freq].append(num) 
        
        # step 3: iterate from the end and pick top k values from the freq arr (non-zero as per constraint 1)
        top_k = []

        for num_arr in reversed(freq_arr):
            if num_arr == None:
                continue
            
            for num in num_arr:
                top_k.append(num)
                if len(top_k) == k:
                    return top_k

        return top_k
