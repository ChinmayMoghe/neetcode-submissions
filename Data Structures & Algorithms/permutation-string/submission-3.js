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
        let matches = 0;
        let required_matches = Object.keys(target_counts).length;

        for(let right=0;right < s2.length;right++) {
            let r_char = s2[right];
            if(r_char in target_counts) {
                search_counts[r_char] ??=0;
                search_counts[r_char] +=1;

                if(search_counts[r_char] === target_counts[r_char]) {
                    matches+=1;
                }
            }

            if(right - left + 1 === window_size) {
                let l_char = s2[left];
                if(matches === required_matches) {
                    return true;
                }
                if(l_char in target_counts) {
                    if(target_counts[l_char]  === search_counts[l_char]) {
                        matches-=1;
                    }
                    search_counts[l_char] -=1;
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