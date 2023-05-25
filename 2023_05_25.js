//https://leetcode.com/problems/insert-interval/

var insert = function (intervals, newInterval) {
    const res = []

    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) {
            res.push(newInterval);
            return res.concat(intervals.slice(1));
        } else if (newInterval[0] > intervals[i][1]) {
            res.push(intervals[i])
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]),
            Math.max(newInterval[1], intervals[i][1])]
        }
    }
    res.push(newInterval)
    return res;
};