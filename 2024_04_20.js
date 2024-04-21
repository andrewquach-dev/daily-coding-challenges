//https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    //nums is array of integers with some 0s
    //array with non zeros in the front
    //[0,1,0,3,12] -> [1,3,12,0,0]
    //[0] -> [0]

    //create l var equal to 0
    //loop through with r var set to 1
    //if l is non zero then increment l
    //else if r is non zero we do in place value changing
    //r value is equal to r value
    //l value equal to 0
    //increment l
    //return array

    let l = 0;

    for (let r = 1; r < nums.length; r++) {
        if (nums[l] !== 0) l++
        else if (nums[r] !== 0) {
            nums[l] = nums[r]
            nums[r] = 0
            l++
        }
    }

    return nums
};