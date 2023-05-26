//https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    // Sort intervals based on the start time in ascending order
    intervals.sort((a, b) => a[0] - b[0]);

    // Initialize the result array with the first interval
    const res = [intervals[0]];

    // Iterate through the intervals
    for (let curr of intervals) {
        // Get the last interval from the result array
        prev = res[res.length - 1];

        // Check if the current interval overlaps with the previous interval
        if (prev[1] >= curr[0]) {
            // If there is an overlap, update the end time of the previous interval
            prev[1] = Math.max(curr[1], prev[1]);
        } else {
            // If there is no overlap, add the current interval to the result array
            res.push(curr);
        }
    }

    // Return the merged intervals
    return res;
};
