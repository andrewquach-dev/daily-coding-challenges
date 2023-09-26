//https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

function replaceElements(arr) {
    let rightMax = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        const newMax = Math.max(rightMax, arr[i]);
        arr[i] = rightMax;
        rightMax = newMax;
    }

    return arr;
}