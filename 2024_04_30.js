//https://leetcode.com/problems/two-sum/description/?envType=list&envId=xi4ci4ig

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //nums is array of numbers, target is sum we want
    //indices of two nums in array that equal target
    //[2,7,11,15], 9 -> [0,1]
    //[3,2,4], 6 -> [1,2]
    //[3,3], 6 -> [0,1]

    //create a map
    //loop through each ele in arr
    //if diff is in map return index and map index 
    //else add ele and index to map

    let map = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in map) {
            return [i, map[diff]]
        } else {
            map[nums[i]] = i
        }
    }
};