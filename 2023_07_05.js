//https://www.codewars.com/kata/5268956c10342831a8000135

function preOrder(node) {
  if (node == undefined) {
    return [];
  }
  return [node.data].concat(preOrder(node.left)).concat(preOrder(node.right));
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node) {
  if (node == undefined) {
    return [];
  }
  return inOrder(node.left).concat(node.data).concat(inOrder(node.right));
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node) {
  if (node == undefined) {
    return [];
  }
  return postOrder(node.left).concat(postOrder(node.right)).concat([node.data]);
}
