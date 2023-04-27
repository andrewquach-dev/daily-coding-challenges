//https://leetcode.com/problems/combination-sum/description/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let buffer = []
    let result = []
    search(0, target);
    return result;

    function search(i, target) {
        if (target === 0) return result.push(buffer.slice());
        if (target < 0) return
        if (i === candidates.length) return
        buffer.push(candidates[i])
        search(i, target - candidates[i]);
        buffer.pop();
        search(i + 1, target)
    }
};