//https://leetcode.com/problems/majority-element/



var majorityElement = function (nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let o = map.get(nums[i])
            map.set(nums[i], o + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    for (let [key, value] of map) {
        if (value > nums.length / 2) return key;
    }
}