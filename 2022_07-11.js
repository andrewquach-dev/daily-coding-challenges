//https://leetcode.com/problems/contains-duplicate/submissions/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return nums.some((e, i) => nums.indexOf(e) !== i);
};