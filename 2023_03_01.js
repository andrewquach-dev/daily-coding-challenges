//https://leetcode.com/problems/reverse-linked-list/

var reverseList = function (head) {
    let [prev, curr, next] = [null, head, null];


    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}