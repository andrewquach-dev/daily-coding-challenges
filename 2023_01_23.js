//https://leetcode.com/problems/copy-list-with-random-pointer/submissions/884047742/

var copyRandomList = function (head, map = new Map()) {
    if (!head) return null;
    if (map.has(head)) return map.get(head);

    const clone = new Node(head.val);

    map.set(head, clone);                           /*           | Space O(N) */
    clone.next = copyRandomList(head.next, map);    /* Time O(N) | Space O(N) */
    clone.random = copyRandomList(head.random, map);/* Time O(N) | Space O(N) */

    return clone;
}