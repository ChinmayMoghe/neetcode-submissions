class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const results = [];
        const helper = (comboArr, track,results) => {
            
            if(track.every(x=>x)) {
                return comboArr;
            }
            for(let i = 0; i<track.length;i++) {
                if(track[i]) {
                    continue;
                }
                const newTrack = [...track];
                newTrack[i] = true;
                results.push(helper([...comboArr,nums[i]],newTrack,results));
            }
        }
        for(let i = 0; i<nums.length;i++) {
            const track = new Array(nums.length).fill(false);
            track[i] = true;
            const comboArr = [nums[i]];
            results.push(helper(comboArr,track,results))
        }
        return results.filter(Boolean);
    }
}
