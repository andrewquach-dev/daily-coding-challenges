//https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    //nums is array of num

    //int that is majority (int appears > n/2)

    //[3,2,3] 3
    //[2,2,1,1,1,2,2] 2

    //map for num and occurrences
    //loop through each
    //if exists increment
    //else set 1
    //loop 2 goes through map 
    //checks if count is > n/2

    let map = {}

    for (let num of nums) {
        if (num in map) {
            map[num]++
        } else {
            map[num] = 1
        }
    }

    for (let key in map) {
        if (map[key] > nums.length / 2) {
            return key
        }
    }
};