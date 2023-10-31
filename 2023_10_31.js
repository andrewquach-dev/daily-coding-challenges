//https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=featured-list&envId=top-amazon-questions?envType=featured-list&envId=top-amazon-questions

var removeDuplicates = function (nums) {
    let [l, r] = [0, 0];

    while (r < nums.length) {
        const [leftVal, rightVal] = [nums[l], nums[r]]

        const isEqual = (rightVal === leftVal);
        if (!isEqual) {
            l++;
            nums[l] = rightVal;
        }
        r++
    }
    return (l + 1);

}