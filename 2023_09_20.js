//https://leetcode.com/problems/contains-duplicate/submissions/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // array of integers
    // boolean 
    // [1,2,3,1] -> true
    // [1,2,3,4] -> false
    // [1,1,1,3,3,4,3,2,4,2] -> true

    //bruteforce way
    // go through each num
    // check to see if the index of that num is equal to the last index of that num

    //optimal way
    //create hashmap
    // go through each num in array
    // map num and count
    // increment if it exists else set to 1
    //if increment/exists true
    // in the end return false

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) == 1) {
            return true
        } else {
            map.set(nums[i], 1)
        }
    }
    return false
};