class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0;
        let right = 1;
        let min_price = 0;
        while(right < prices.length){
            if(prices[left] < prices[right]){
                min_price = Math.max(min_price, (prices[right] - prices[left]));
            }else{
                left = right;
            }
            right ++;
        }
        return min_price;
    }
}
