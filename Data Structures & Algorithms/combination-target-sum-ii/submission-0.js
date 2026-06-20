class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let out = [];
        candidates.sort((a,b) => a - b);

        function dfs(i,currList, total) {
            if(total === target) {
                out.push([...currList]);
                return;
            }
            for(let j=i;j<candidates.length;j++) {
                if(total + candidates[j] > target) {
                    return;
                }
                
                if(j > i && candidates[j] === candidates[j - 1]) continue;
                currList.push(candidates[j]);
                dfs(j+1,currList,total+candidates[j]);
                currList.pop();
            }
        }

        dfs(0,[],0);
        return out;
    }
}
