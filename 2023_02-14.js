//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


var maxProfit = function (prices) {
    let [left, right, max] = [0, 1, 0];

    while (right < prices.length) {
        if (prices[right] <= prices[left]) {
            left = right;
        }
        max = Math.max(max, prices[right] - prices[left])
        right++;
    }
    return max;
};