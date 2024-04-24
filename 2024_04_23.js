//https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    //s is string
    //boolean
    //"A man, a plan, a canal: Panama" true
    //"race a car" false
    //" " true

    //strip it  
    //basecase
    //loop through stripped s until halfway point
    //if chars are equal continue else return false
    //return true

    s = s.split('').map(ch => ch.toLowerCase()).join('').replace(/[^a-zA-Z0-9]/g, '')

    if (s == "") return true;

    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false
    }

    return true
};