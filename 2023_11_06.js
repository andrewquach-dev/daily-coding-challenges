//https://www.codewars.com/kata/588534713472944a9e000029

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function isBST(node) {
    const g = inOrder(node);
    const a = g.next();
    if (a.done) return true;
    const b = g.next();
    if (b.done) return true;
    var p = b.value;
    const asc = a.value < p;
    for (const v of g) {
        if (asc ? p > v : p < v) return false;
        p = v;
    }
    return true;
}

function* inOrder(n) {
    if (n !== null) {
        yield* inOrder(n.left);
        yield n.value;
        yield* inOrder(n.right);
    }
}