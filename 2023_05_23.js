//https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let currSum = 0;

    for (let n of nums) {
        if (currSum < 0) currSum = 0
        currSum += n
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum
};