class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const maxRate = Math.max(...piles);
        const minRate = 1; // minimum rate at which koko can eat bananas, lets assume 1 banana per hour

        // need to find the minimum rate (that is <= h) at which all bananas in a pile can be eaten

        // important: we can finish eating pile but we cannot transition to other pile if time remains that hour

        // For example: rate is 2 bananas / hr and you got 3 bananas in a pile, then time duration to eat that pile would be not 1.5 hours but 2 hours since
        // we are given this constraint - we need to consider ceiling always

        let min = minRate;
        let max = maxRate;

        while(min <= max) {
            const mid = Math.floor((min+max) /2);

            let hours = 0;
            for(const pile of piles) {
                hours+=Math.ceil(pile / mid);
            }

            if (hours > h) {
                // increase the rate , to decrease the time taken to eat bananas
                min = mid + 1;     
            } else {
                // decrease the rate, to increase the hours taken to eat bananas
                max = mid - 1;
            }
        }
        return min;
    }
}
