//https://leetcode.com/problems/length-of-last-word/



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // const words = s.trim().split(' ');
    // return words[words.length - 1].length;
    let [i, length] = [s.length - 1, 0];

    // Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Count the length of the last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};