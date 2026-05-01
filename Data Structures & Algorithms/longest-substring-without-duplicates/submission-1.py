class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # create a set to track unique characters of sub string
        # create 2 pointers , left and right , both start at 0
        # right - keeps moving forward by 1 always and adds characters to set
        # left moves forward - when it sees a duplicate and keeps moving forward until no more duplicates
        
        substr_set = set()
        left,right = 0,0        
        substr_length = 0

        while right < len(s):
            right_char = s[right]

            while right_char in substr_set:
                substr_set.remove(s[left])
                left+=1
            
            substr_set.add(right_char)
            substr_length = max(substr_length, len(substr_set))
            right+=1
        return substr_length

       