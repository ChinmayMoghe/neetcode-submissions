class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left=0;
        let max_len=0;
        let freq = new Map();
        let maxf = 0;
        for(let right=0;right < s.length;right++) {
            freq.set(s[right], (freq.get(s[right]) || 0) + 1);
            maxf = Math.max(maxf, freq.get(s[right]));

            while(((right - left + 1) - maxf) > k) {
                freq.set(s[left], freq.get(s[left]) - 1);
                left+=1;
            }
            max_len = Math.max(max_len, right -left+1);
        }
        return max_len;
    }
}

/*
    XXXASBXXXBXX k = 2

    we can replace k characters in a substring and we should return the length of longest substring with uniform character

    for any substring, 

    1. we need to find the frequency of most occuring character in the substring
    2. length of substring - most occuring character <= k -> This gives us the highest chance of finding a string with uniform character
    3. If the window satisfies the condition: expand 
    4. If the window does not : slide
    5. keep track of highest len 
*/