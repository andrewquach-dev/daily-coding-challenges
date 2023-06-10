//https://www.codewars.com/kata/5a0178f66f793bc5b0001728/train/javascript

function longestPalindrome(str) {
    let s = str.toLowerCase();
    let arr = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let count = 0
    for (let i = 0; i < arr.length; ++i) {
        let c = 0;
        for (let j = 0; j < s.length; ++j) {
            if (s[j] == arr[i]) {
                ++c;
            }
        }
        count += Math.floor(c / 2) * 2
    }
    return count == s.length ? count : ++count
}