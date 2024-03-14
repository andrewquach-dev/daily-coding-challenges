//https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in map) {
            return [i, map[diff]];
        }
        map[nums[i]] = i;
    }
}