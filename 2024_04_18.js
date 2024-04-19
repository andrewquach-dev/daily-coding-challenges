//https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    //nums is array of num
    //array ordered specifically 
    //[0,1,0,3,12] -> [1,3,12,0,0]
    //[0] -> [0]

    let left = 0;
    for (let right = 1; right < nums.length; right++) {
        if (nums[left] !== 0) left++
        else if (nums[right] !== 0) {
            nums[left] = nums[right];
            nums[right] = 0;
            left++;
        }
    }
};