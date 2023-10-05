//https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s === "") {
        return true; // An empty string is always a subsequence
    }

    let sIndex = 0; // Initialize an index for string s

    for (let i = 0; i < t.length; i++) {
        if (s[sIndex] === t[i]) {
            sIndex++; // Move to the next character in s
        }

        if (sIndex === s.length) {
            return true; // If we've iterated through s completely, it's a subsequence
        }
    }

    return sIndex === s.length;
};
