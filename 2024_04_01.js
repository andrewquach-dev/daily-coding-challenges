// /https://www.codewars.com/kata/588534713472944a9e000029

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const isMinFirstBST = (node, min, max) => {
    return (
        (min === undefined || min < node.value) &&
        (max === undefined || node.value < max) &&
        (node.left === null || isMinFirstBST(node.left, min, node.value)) &&
        (node.right === null || isMinFirstBST(node.right, node.value, max)));
};

const isMaxFirstBST = (node, min, max) => {
    return (
        (min === undefined || node.value > min) &&
        (max === undefined || max > node.value) &&
        (node.left === null || isMaxFirstBST(node.left, node.value, max)) &&
        (node.right === null || isMaxFirstBST(node.right, min, node.value)));
};

const isBST = (node, min, max) => {
    return node === null || isMinFirstBST(node) || isMaxFirstBST(node);
};