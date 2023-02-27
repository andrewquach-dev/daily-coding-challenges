//https://leetcode.com/problems/reverse-linked-list/

var reverseList = function (head) {
    let [prev, curr, next] = [null, head, null];

    while (curr) {
        // save next before we overwrite node.next!
        next = curr.next;

        // reverse pointer
        curr.next = prev;

        // step forward in the list
        prev = curr;
        curr = next;
    }
    return prev;
}