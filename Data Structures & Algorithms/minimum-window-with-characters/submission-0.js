class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let left = 0;
        let remaining = t.length;

        let charFreqArr = new Array(128).fill(0);

        for(const char of t) {
            charFreqArr[char.charCodeAt(0)]+=1;
        }

        let slice = '';

        for(let right = 0; right < s.length;right++) {
            
             // check if character is a character present in target string
            const rightChar = s[right];
            if(charFreqArr[rightChar.charCodeAt(0)] > 0) {
                remaining-=1;
            }
            charFreqArr[rightChar.charCodeAt(0)]-=1;

            while(remaining === 0) {
                if(slice === '' || ((right - left)+1) < slice.length) {
                    slice = s.slice(left, right+1);
                }
                const leftChar = s[left];
                charFreqArr[leftChar.charCodeAt(0)]+=1;
                if(charFreqArr[leftChar.charCodeAt(0)] > 0) {
                    remaining+=1;
                }
                left+=1;
            }
        }

        return slice;
    }
}


/*
Approach

1. Use a sliding window solution for this  -  Why ? because its more efficient that doing nested loops to find substrings which would typically require O(n^2) time complexity
2. freq_map = new Array(128).fill(0); 
3. for (const char of t) { freq_map[char.charCodeAt(0)]++ }
4. remaining = t.length; 
5. right char freq is non zero -> freq[char]--; remaining-=1
6. while loop checks if remaining === 0: 
7. we move left pointer forward until substring remains valid - if not then we exit the loop 

*/