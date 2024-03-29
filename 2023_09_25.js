//https://leetcode.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let ans = []

    for (let i = 0; i < nums.length * 2; i++) {
        ans.push(nums[i % nums.length])
    }
    return ans
};