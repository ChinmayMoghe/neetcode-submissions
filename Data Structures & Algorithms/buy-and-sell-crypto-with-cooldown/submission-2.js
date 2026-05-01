class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const dp = {};
        const dfs = (i, canBuy) => {
            if(i >= prices.length) {
                return 0;
            }

            const key = `${i}-${canBuy}`;
            if (key in dp) {
                return dp[key];
            }

            let cooldown = dfs(i+1,canBuy);

            if(canBuy) {
                let buy = dfs(i+1,false) - prices[i];
                return Math.max(buy,cooldown);
            } else {
                let sell = dfs(i+2,true) + prices[i];
                return Math.max(sell,cooldown) 
            }
        }

        return dfs(0,true);
    }
}
