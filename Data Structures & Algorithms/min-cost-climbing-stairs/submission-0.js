class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {

        for(let i=cost.length - 2;i>-1;i--) {
            cost[i]+= Math.min(cost?.[i+1] ?? 0,cost?.[i+2] ?? 0);
        }
        return Math.min(cost[0],cost[1]);
    }
}


/*

Requirement: 

Find the minimum cost to reach the top of stairs (top of stairs is represented by length of cost + 1)

We can start with index 0 or 1 without any cost 

We have to pay the cost[i] to move to next index either i+1 or i+2 - cost is same in both cases 

cost = [10,15,20] 

so here we have an option to start from i=0 i.e. starting cost is 10
or i=1 cost to move to next idx is 15


so for 
i=0  0
    - move to i+1 10
        - move to i+1 25
            - move to i+1 45
    - move to i+2 10
         - move to i+1 30 

so min cost from i=0 is 30
         
i = 1
  - move to i+1 15
        - move to i+1 35
  - move to i+2 15 - here out of bound 

  so min cost from i = 15


so we always have two choices at each index to move one step or two steps, and the cost to move to top from any given i depends on cost paid for moving from given i
and the minimum of dp[i+1] and dp[i+2]; 

so dp[i] = cost[i] + min(dp[i+1],dp[i+2])

where dp[i+1] is again the min cost to reach from i+1 to top, so on and so forth

*/