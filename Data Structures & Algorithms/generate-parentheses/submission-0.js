class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];
        function backtrack(open, close, combi) {
            if (open === n && close === n) {
                res.push(combi);
                return;
            }
            if(open < n) {
                backtrack(open+1,close,combi+'(');
            }

            if(open > close) {
                backtrack(open,close+1,combi+')');
            }
        }
        backtrack(0,0,"");
        return res;
    }
}
