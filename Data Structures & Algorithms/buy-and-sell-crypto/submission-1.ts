class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let sell = 1;
        let buy = 0;
        let profit = 0
        let maxProfit = 0
        while(sell < prices.length){
            if(prices[buy] < prices[sell]){
                profit = prices[sell] - prices[buy];
                maxProfit = Math.max(profit,maxProfit);
            }
            else buy = sell;
            sell++;
        }
        return maxProfit;
    }
}
