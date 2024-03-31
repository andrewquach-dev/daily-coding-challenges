//https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    //nums is an array of numbers
    //boolean if contains dupes

    // nums = [1,2,3,1] true
    // nums = [1,2,3,4] false
    // nums = [1,1,1,3,3,4,3,2,4,2] true

    //create map to store ele and count occurrences
    //loop through each ele
    //if ele is in map then return true
    //else set ele:1

    //return false

    let map = {}
    for (const num of nums) {
        if (num in map) { return true }
        map[num] = 1;
    }
    return false
};