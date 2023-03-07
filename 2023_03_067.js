//https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/

var removeNthFromEnd = function (head, n) {
    // Use dummy node at head of list
    let dummy = new ListNode(null);
    dummy.next = head;
    let [l, r] = [dummy, head];

    // give r a head start
    for (let i = 0; i < n; i++) {
        r = r.next;
    }

    // moving the pointers along
    while (r) {
        l = l.next;
        r = r.next;
    }

    // the one after l need to be removed
    l.next = l.next.next;
    return dummy.next;
};