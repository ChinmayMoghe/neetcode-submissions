class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit=0
        l,r = 0,1

        while l < r and r < len(prices):
            buy = prices[l]
            sell = prices[r]

            if buy >= sell:
                l = r
            else:
                profit = max(profit, sell - buy)
            r+=1
                
        return profit
        