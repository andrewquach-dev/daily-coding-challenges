//https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */

//s is a string, contains parentheses
//boolean

//create a map of parentheses
//create a stack(array)
//iterate though each
//if there's an opening then add the corresponding closing from the map
//else if closing is equal to q's last ele then pop the q
//if q.length is > 0 then return false else true

var isValid = (s, stack = []) => {
    const map = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    for (const char of s) {/* Time O(N) */
        const isBracket = (char in map)
        if (!isBracket) { stack.push(char); continue; }/* Space O(N) */

        const isEqual = (stack[stack.length - 1] === map[char])
        if (isEqual) { stack.pop(); continue; }

        return false;
    }

    return (stack.length === 0);
};