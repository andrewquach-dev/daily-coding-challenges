//https://leetcode.com/problems/length-of-last-word/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let parted = s.trim().split(" ");
  return parted[parted.length - 1].length;
};
