//https://leetcode.com/problems/valid-anagram/submissions/885326538/

var isAnagram = function (S, T) {
    let count = {};
    let N = S.length;
    if (S.length != T.length) return false
    for (let i = 0; i < N; i++) {
        if (!count[S[i]]) count[S[i]] = 0
        if (!count[T[i]]) count[T[i]] = 0
        count[S[i]]++
        count[T[i]]--
    }
    for (let ch in count) {
        if (count[ch] !== 0) return false
    }
    return true
};