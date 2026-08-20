class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits === '') {
            return [];
        }

        let strIdx = 0;
        let lookup = new Map([
            ["2", ["a", "b", "c"]],
            ["3", ["d", "e", "f"]],
            ["4", ["g", "h", "i"]],
            ["5", ["j", "k", "l"]],
            ["6", ["m", "n", "o"]],
            ["7", ["p", "q", "r", "s"]],
            ["8", ["t", "u", "v"]],
            ["9", ["w", "x", "y", "z"]],
        ]);

        if (digits.length ===  1) {
            return lookup.get(digits[0]);
        }

        let results = [];

        function backtrack(strIdx,combi) {
            if(strIdx === digits.length) {
                results.push(combi);
                return;
            } 
            let digit = digits[strIdx];
            let chars = lookup.get(digit);
            for(const char of chars) {
                backtrack(strIdx+1, combi+char);
            }
        }

        backtrack(0,'');
        return results;
    }
}
