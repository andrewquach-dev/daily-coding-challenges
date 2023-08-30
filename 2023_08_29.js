//https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let fast = head;
    let slow = head;
    let prev = null;
    let tmp;

    // Reverse the first half of the linked list
    while (fast && fast.next) {
        fast = fast.next.next;
        tmp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = tmp;
    }

    let maxSum = 0;

    // Calculate maximum twin sum by adding the values of nodes
    while (slow) {
        maxSum = Math.max(maxSum, slow.val + prev.val);
        slow = slow.next;
        prev = prev.next;
    }

    return maxSum;
};