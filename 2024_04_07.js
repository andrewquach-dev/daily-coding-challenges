//https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    return nums.map(e => Math.pow(e, 2)).sort((a, b) => a - b);
};