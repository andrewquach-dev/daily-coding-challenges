//https://www.codewars.com/kata/55cacc3039607536c6000081/train/javascript

function Node(data, nxt) {
    this.data = data;
    this.next = nxt;
}

function insertNth(head, index, data) {
    if (index == 0) return new Node(data, head);
    if (head && index > 0) {
        head.next = insertNth(head.next, index - 1, data);
        return head;
    }
    throw "Error";
}