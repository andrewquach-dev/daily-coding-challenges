//https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = function (s) {
    let longest = ''; // variable to store the longest palindrome

    for (let i = 0; i < s.length; i++) {
        expandCheck(i, i); // check for odd-length palindromes
        expandCheck(i, i + 1); // check for even-length palindromes
    }

    function expandCheck(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            // while the current characters match and the pointers don't go out of bounds
            if (r - l + 1 > longest.length) {
                // if the current palindrome is longer than the current longest palindrome
                longest = s.slice(l, r + 1); // update the longest palindrome
            }
            l--; // expand pointers to check next characters
            r++;
        }
    }

    return longest; // return the longest palindrome
};