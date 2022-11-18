//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

var maxProfit = function (prices) {
    let [l, r, max] = [0, 1, 0];

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l]
            max = Math.max(max, profit);
        } else {
            l = r
        }
        r += 1;
    }
    return max;
};