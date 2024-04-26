//https://leetcode.com/problems/merge-two-sorted-lists/description/

var mergeTwoLists = function (l1, l2) {
    const head = new ListNode(0);
    let current = head;
    let [p1, p2] = [l1, l2]

    while (p1 && p2) {
        if (p2.val < p1.val) {
            current.next = p2;
            p2 = p2.next;
        } else {
            current.next = p1;
            p1 = p1.next;
        }
        current = current.next;
    }
    current.next = p1 || p2;

    return head.next;
};