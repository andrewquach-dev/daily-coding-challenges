//https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    // given arr , return arr
    let rightMax = -1;
    let newMax;

    for (let i = arr.length - 1; i >= 0; i--) {
        newMax = Math.max(rightMax, arr[i])
        arr[i] = rightMax;
        rightMax = newMax;
    }

    return arr;
};