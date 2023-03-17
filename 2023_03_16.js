//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

var lowestCommonAncestor = function (root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
    return root;
}

