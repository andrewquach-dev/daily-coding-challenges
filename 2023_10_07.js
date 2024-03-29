//https://leetcode.com/problems/two-sum/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let prevMap = {}

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (diff in prevMap) return [prevMap[diff], i]
        prevMap[nums[i]] = i
    }
};