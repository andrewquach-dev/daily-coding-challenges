//https://leetcode.com/problems/move-zeroes/

var moveZeroes = function (nums) {
    let left = 0;
    for (let right = 1; right < nums.length; right++) {
        if (nums[left] !== 0) left++;
        else if (nums[right] !== 0) {
            // swapping
            nums[left] = nums[right];
            nums[right] = 0;
            left++;
        }
    }
};