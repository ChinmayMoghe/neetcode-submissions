class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let window_size = s1.length;
        
        // keep frequency of characters in s1
        let target_counts = {};
        for(let char of s1) {
          target_counts[char] ??=0;
          target_counts[char] +=1;
        }
        let left = 0;
        let search_counts = {};   
        for(let right=0;right < s2.length;right++) {
            let r_char = s2[right];
            if(r_char in target_counts) {
                search_counts[r_char] ??=0;
                search_counts[r_char] +=1;
            }

            if(right - left+ 1 === window_size) {
                let size = 0;
                for(let char in target_counts) {
                    if(target_counts[char] === search_counts[char]) {
                        size+=1;
                    }   
                }
                if(size === Object.keys(target_counts).length) return true;
                if(s2[left] in target_counts) {
                    search_counts[s2[left]] -=1;
                }
                left+=1;
            }
        }

        return false;
    }
}


/*
 fixed window variation 

 window size = s1.length

 need to check if all characters from s1 are in substring of s2

*/