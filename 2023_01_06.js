//https://leetcode.com/problems/binary-search/submissions/872942725/

var search = function (nums, target) {
  let [l, r] = [0, nums.length - 1]
  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (nums[m] > target) {
      r = m - 1
    } else if (nums[m] < target) {
      l = m + 1
    } else {
      return m;
    }

  }
  return -1
};