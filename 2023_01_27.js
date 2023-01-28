//https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = {}
    for (const s of strs) {
        const array = Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            const ascii = s.charCodeAt(i);
            array[ascii - 97] += 1;
        }
        const key = array.join('-');
        if (map[key]) {
            map[key].push(s);
        } else {
            map[key] = [s];
        }
    }
    return Object.values(map);

};