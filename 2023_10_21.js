//https://leetcode.com/problems/palindrome-number/description/?envType=featured-list&envId=top-amazon-questions?envType=featured-list&envId=top-amazon-questions

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // x is int
    // boolean
    // 121 -> true
    // -121 -> false
    // 1234321 -> true

    //turn x to string
    //create r pointer = length -1
    //for loop with l pointer half way point
    //if x[l] != x[r-l] then its false
    //return true

    const s = x.toString();
    const r = s.length - 1;

    for (let l = 0; l < Math.floor(s.length / 2); l++) {
        if (s[l] !== s[r - l]) return false
    }
    return true;
};