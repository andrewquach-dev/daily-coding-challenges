//https://leetcode.com/problems/climbing-stairs/description/

var climbStairs = function (n) {
    let [one, two, temp] = [1, 1, 0]

    for (let i = 0; i < n; i++) {
        temp = one + two;
        one = two;
        two = temp;
    }

    return one;
}