//https://leetcode.com/problems/number-of-1-bits/description/

var hammingWeight = function (int) {
    let count = 0;

    while (int !== 0) {
        const bitComparison = int & 1;
        if (bitComparison === 1) count++;
        int >>>= 1;
    }
    return count

}