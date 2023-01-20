//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function (head, n) {
    let fast = head, slow = head //creating a slow and fast pointer, fast will reach the end of list while slow will reach the nth node form the end
    for (let i = 0; i < n; i++)fast = fast.next //fast gets a headstart
    if (!fast) return head.next //exits if
    while (fast.next) fast = fast.next, slow = slow.next //both pointers traversing through linkedlist
    slow.next = slow.next.next 
    return head
};