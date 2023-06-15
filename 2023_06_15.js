//https://www.codewars.com/kata/55beec7dd347078289000021

function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    let length = 0;
    let current = head;
    while (current != null) {
        current = current.next;
        length++
    }
    return length;
}

function count(head, data) {
    let current = head;
    let count = 0;

    while (current != null) {
        if (current.data == data) {
            count++;

        }
        current = current.next;
    }
    return count;
}