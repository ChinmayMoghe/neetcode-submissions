class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        freq_counter= [0] * 26

        for char in s:
            char_idx = ord(char) - 97
            freq_counter[char_idx]+=1
        
        for char in t:
            char_idx = ord(char) - 97
            freq_counter[char_idx]-=1
            if freq_counter[char_idx] < 0:
                return False
        
        for freq in freq_counter:
            if freq != 0: 
                return False
        return True

