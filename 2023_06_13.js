//https://www.codewars.com/kata/55d9f257d60c5fd98d00001b/train/javascript


function Node(data) {
    this.data = data;
    this.next = null
}

function removeDuplicates(head) {
    for (let node = head; node != null; node = node.next) {
        while (node.next && node.data == node.next.data) {
            node.next = node.next.next
        }
    }
    return head
}