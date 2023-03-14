//https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

var maxDepth = function (root) {
    let [stack, res] = [[[root, 1]], 0]

    while (stack.length > 0) {
        let [node, depth] = stack.pop();

        if (node) {
            res = Math.max(res, depth);
            stack.push([node.left, depth + 1])
            stack.push([node.right, depth + 1])
        }
    }
    return res;
}
