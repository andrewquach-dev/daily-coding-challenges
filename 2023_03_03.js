//

var mergeTwoLists = function (list1, list2) {
    // Initialise a new LinkedList with a dummy ListNode
    let newList = new ListNode(0);

    // Maintain a reference to the head of the new LinkedList
    let headOfNewList = newList;

    // Whilst both of the passed in lists contain more elements
    while (l1 && l2) {

        // If li's value is smaller
        if (l1.val < l2.val) {

            // Add l1's value to the new list
            newList.next = l1;

            // Move l1 to its next element
            l1 = l1.next;
        } else {

            // Add l2's value to the new list
            newList.next = l2;

            // Move l2 to its next element
            l2 = l2.next;
        }

        // Move into the next level of the LinkedList for the next iteration
        newList = newList.next;
    }

    // If l1 has run out of elements
    if (!l1) {

        // Append l2 to the new list
        newList.next = l2;
    } else {

        // Append l1 to the new list
        newList.next = l2;
    }

    return headOfNewList.next;

};