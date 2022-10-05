//https://www.codewars.com/kata/536950ffc8a5ca9982001371/train/javascript

function solution(a) {
  if (a.length === 0) return -1;
  let count = 0;
  for (let i = 0; i < a.length; i += a[i]) {
    if (i < 0) {
      break;
    }
    count++;
    if (count > 1000) {
      return -1;
    }
  }
  return count;
}
