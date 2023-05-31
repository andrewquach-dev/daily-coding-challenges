//https://www.lintcode.com/problem/919/



function minMeetingRooms(intervals) {
    const time = []
    for (const [start, end] of intervals) {
        time.push([start, 1])
        time.push([end, -1])
    }

    time.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        }
        return a[1] - b[1]
    })

    let count = 0;
    let maxCount = 0;
    for (const t of time) {
        count += t[1]
        maxCount = Math.max(maxCount, count);
    }
    return maxCount
}