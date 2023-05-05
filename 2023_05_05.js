//https://leetcode.com/problems/house-robber/

var rob = function (nums) {
    let rob1 = 0, rob2 = 0;

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const temp = Math.max(n + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
};