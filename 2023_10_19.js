//https://leetcode.com/problems/two-sum/?envType=featured-list&envId=top-amazon-questions?envType=featured-list&envId=top-amazon-questions

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //nums is array of int, target is int
    //array of indices
    //nums = [2,7,11,15], target = 9 => [0,1]
    //nums = [3,2,4], target = 6 => [1,2]
    //nums = [3,3], target = 6 => [0,1]

    //create a hashmap
    //for through each num in nums
    //if target - nums is in hashmap
    //return [hashmap[target-nums],i]
    //else store the value and index in hashmap

    const hashmap = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in hashmap) {
            return [i, hashmap[diff]]
        }
        hashmap[nums[i]] = i
    }

};