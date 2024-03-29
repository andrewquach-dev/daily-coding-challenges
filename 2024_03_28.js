//https://leetcode.com/problems/two-sum/submissions/1216834023/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //nums is array of int
    //target is int

    //array containing two indices

    //nums = [2,7,11,15], target = 9 => [0,1]
    //nums = [3,2,4], target = 6 => [1,2]
    //nums = [3,3], target = 6 => [0,1]

    //hashmap
    //one by one
    //store ele and index
    //check ele if target minus ele is in map then return the indices

    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in map) {
            return [i, map[diff]];
        } else {
            map[nums[i]] = i
        }
    }
};