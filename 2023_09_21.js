//https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // 2 strings
    // boolean value
    //s = "anagram", t = "nagaram" -> true
    //s = "rat", t = "car" -> false
    //s = "car", t = "rac" -> true

    //check to see if lengths of the words are the same, if not return false
    //create 2 hashmaps for both words
    //go through one of them by each letter
    //fill hashmap
    //go through the keys of one of the hashmap
    //check to see if values are same for both if not then return false
    //else return true
    if (s.length !== t.length) return false;

    let a = new Map();
    let b = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        a.set(charS, (a.get(charS) || 0) + 1);
        b.set(charT, (b.get(charT) || 0) + 1);
    }

    for (let [key, value] of a) {
        if (a.get(key) !== b.get(key)) return false;
    }

    return true;
};

