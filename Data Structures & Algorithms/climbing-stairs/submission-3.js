class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = new Map();
        
        const helper = (k) => {
            if(k > n) return 0;
            if(k === n) return 1;

            if(memo.has(k)) return memo.get(k);

            const result = helper(k+1) + helper(k+2);
            memo.set(k,result);

            return result; 
        };

        return helper(0);
    }
}
