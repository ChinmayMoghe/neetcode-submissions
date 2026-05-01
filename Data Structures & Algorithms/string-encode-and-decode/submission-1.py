class Solution:

    def encode(self, strs: List[str]) -> str:
        str_out=''

        for s in strs:
            str_out+= str(len(s)) + '#' + s
        return str_out

    def decode(self, s: str) -> List[str]:
        res,i = [],0

        while i < len(s):
            j = i

            while s[j] != '#':
                j+=1
            
            length = int(s[i:j])
            string = s[j+1:j+1+length]
            res.append(string)
            i = j+1+length
        return res

# Intuition

# Naive approach: use a delimiter (some weird non-ascii delimiter) to join string, use the same delimiter to decode string by splitting based on the delimiter

# Cons: delimiter could be part of the string so split could be in accurate

# Optimized approach: 
# Using encoding approach we can encode information about the strings with following approach 
# <length><delimiter><word>....so on and so forth
# This approach has one advantage that it won't break the decoding logic since we always having a fixed position of the number and delimiter
# 4#neet4#code4#love3#you ->example
# In decode, we first iterate to collect count (i.e. 4), this is based on the encoding algo
# After #, we collect the number of characters (in this case 4) and join it (or take a slice out of main string) 
# and rinse and repeat this algo, until we reach the end of string

# We need to make sure that we loop to collect the number since it could be any length (4, 30, 200)

