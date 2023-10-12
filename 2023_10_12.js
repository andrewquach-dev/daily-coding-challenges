//https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (words) => {
    const map = new Map();

    for (const original of words) {
        const frequency = new Array(26).fill(0);

        for (const char of original) {
            const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
            frequency[charCode]++;
        }

        const hash = frequency.toString();
        if (!map.has(hash)) {
            map.set(hash, []);
        }
        map.get(hash).push(original);
    }

    return [...map.values()];
};