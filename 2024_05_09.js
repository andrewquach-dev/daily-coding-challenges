//https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // Two Pointer theory
    let result = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
        if (i === 0 || nums[i] !== nums[i - 1])
            twoSum(nums, i, result);
    }
    return result;
};
function twoSum(nums, i, result) {
    let low = i + 1, high = nums.length - 1;
    while (low < high) {
        let sum = nums[i] + nums[low] + nums[high];
        if (sum > 0) {
            high--;
        } else if (sum < 0) {
            low++;
        } else {
            result.push([nums[i], nums[low], nums[high]]);
            low++;
            high--;
            while (low < high && nums[low] === nums[low - 1]) low++;
        }
    }
}
