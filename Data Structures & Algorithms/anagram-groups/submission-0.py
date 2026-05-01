class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        anagram_groups = {}

        for word in strs:
            key = self.serializeFreqCounter(self.buildFreqCounter(word))

            if(key in anagram_groups):
                anagram_groups[key].append(word)
            else: 
                anagram_groups[key] = [word]
        
        return list(anagram_groups.values())

    
    def buildFreqCounter(self, word:str) -> List[int]:
        freq_counter = [0]*26

        for letter in word:
            freq_counter[ord(letter) - ord('a')]+=1
        
        return freq_counter

    def serializeFreqCounter(self, freq_counter:List[int]) -> str:
        return "#".join(map(str,freq_counter))
        