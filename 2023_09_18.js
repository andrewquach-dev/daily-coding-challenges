//https://www.codewars.com/kata/55d17ddd6d7868493e000074/train/javascript

function Node(data) {
    this.data = data;
    this.next = null;
}

function append(a, b) {
    if (!a) return b;
    a.next = append(a.next, b);
    return a;
}