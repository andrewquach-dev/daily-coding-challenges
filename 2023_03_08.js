//https://leetcode.com/problems/merge-k-sorted-lists/

const mergeKLists = function (lists) {
    // Return early if no ListNodes were supplied
    if (!lists.length) return null;

    // Loop through the supplied ListNodes
    for (let i = 1; i < lists.length; i++) {
        // Merge each ListNode with the first
        lists[0] = merge(lists[0], lists[i])
    }

    // return the merged ListNode
    return lists[0];
}

const merge = function (k1, k2) {
    // if either list is empty, return the other list's node
    if (k1 == null) return k2;
    if (k2 == null) return k1;

    // if k1 is lower
    if (k1.val < k2.val) {
        k1.next = merge(k1.next, k2);
        return k1;
    }

    // if k2 is lower
    else {
        k2.next = merge(k1, k2.next);
        return k2;
    }
}