//https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    //s and t are strings
    //boolean
    //s = "ab#c", t = "ad#c" true
    //s = "ab##", t = "c#d#" true
    //s = "a#c", t = "b" false

    //create 2 stack vars
    //first loop for first string
    //if hashtag then pop
    //else add to stack
    //return if stacks are equal

    let [s1, s2] = [[], []]

    for (let ch of s) {
        if (ch === "#") {
            s1.pop();
        } else {
            s1.push(ch)
        }
    }

    for (let ch of t) {
        if (ch === "#") {
            s2.pop();
        } else {
            s2.push(ch)
        }
    }

    return s1.join('') === s2.join('')

};