//https://leetcode.com/problems/generate-parentheses/

var generateParenthesis = (n, combos = []) => {
    const isBaseCase = n === 0;
    if (isBaseCase) {
        combos.push('');            /*             | Space O(N) */

        return combos;
    }

    return closureNumber(n, combos);/* Time O(2^N) | Space O(2^N) */
}

const closureNumber = (n, combos) => {
    for (let c = 0; c < n; c++) {/* Time O(N) */
        for (const left of generateParenthesis(c)) {                 /* Time O(2^N) | Space O(2^N) */
            for (const right of generateParenthesis(((n - 1) - c))) {/* Time O(2^N) | Space O(2^N) */
                combos.push(`(${left})${right}`);                    /*             | Space O(N) */
            }
        }
    }

    return combos
}