//https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/submissions/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let n = arr.length;
  let max = arr[n - 1];
  arr[n - 1] = -1;
  for (let i = n - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max;
    if (max < temp) {
      max = temp;
    }
  }
  return arr;
};
