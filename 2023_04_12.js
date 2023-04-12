//https://www.lintcode.com/problem/920/solution

// Define the function "canAttendMeetings" that takes in an array of intervals
var canAttendMeetings = function (intervals) {

    // Sort the intervals by start time
    intervals.sort(([aStart, aEnd], [bStart, bEnd]) => aStart !== bStart ? aStart - bStart : aEnd - bEnd);

    // Initialize the variable "prev" to the first interval in the sorted array
    let prev = intervals.shift();

    // Iterate over the remaining intervals in the sorted array
    for (const curr of intervals) {
        const [prevStart, prevEnd] = prev;
        const [currStart, currEnd] = curr;

        // Check if there is an overlap between the previous interval and the current interval
        if (currStart < prevEnd) return false;

        // Update the value of "prev" to the current interval
        prev = curr;
    }

    // If there are no overlaps between any intervals, return true
    return true; 
}
