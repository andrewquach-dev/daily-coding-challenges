//https://www.lintcode.com/problem/920/description

var canAttendMeetings = function (intervals) {
    // sort the intervals by start time
    intervals.sort((a, b) => a.start - b.start);

    // check for overlapping intervals
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i].end > intervals[i + 1].start) {
            return false;
        }
    }

    return true;
};