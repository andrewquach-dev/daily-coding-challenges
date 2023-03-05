//https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function (head) {
    let [slow, fast] = [head, head]
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true
        }
    }
    return false
};