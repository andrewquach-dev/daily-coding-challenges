//https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/

var serialize = function (root) {
    let res = [];
    const dfs = (node) => {
        if (node == null) {
            res.push("N");
            return;
        }
        res.push(JSON.stringify(node.val));
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return res.join();
}

var deserialize = function (data) {
    let values = data.split(",");
    let i = 0;
    const dfs = () => {
        if (values[i] == 'N') {
            i++
            return null;
        }
        let node = new TreeNode(values[i]);
        i++;
        node.left = dfs();
        node.right = dfs();
        return node;
    }

    return dfs();
}