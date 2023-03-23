//https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

var kthSmallest = function (root, k) {
    const stack = [];
    let count = 1;
    let node = root;

    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        if (count === k) return node.val;
        else count++;
        node = node.right;
    }
}