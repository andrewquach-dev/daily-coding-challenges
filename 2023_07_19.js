//https://www.codewars.com/kata/581e476d5f59408553000a4b/train/javascript

function length(head) {
  let len = 0;
  while (head) {
    head = head.next;
    len++;
  }
  return len;
}
