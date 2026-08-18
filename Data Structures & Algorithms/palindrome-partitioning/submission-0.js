class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let result = [];
        let  part = [];
        const backtrack = (i) => {
            if(i >= s.length) {
                result.push([...part]);
                return;
            }
            for(let j=i;j<s.length;j++) {
                if(this.isPalindrome(s,i,j)) {
                    part.push(s.slice(i,j+1));
                    backtrack(j+1);
                    part.pop();
                }
            }
        }
        backtrack(0);

        return result;
    }

    isPalindrome(s,i,j) {
       let l = i;
       let r = j;
       while(l<r) {
        if (s[l] !== s[r]) {return false;}
        l++;
        r--;
       }
       return true
    }
}
