//https://www.codewars.com/kata/5596f6e9529e9ab6fb000014/solutions/javascript?filter=me&sort=best_practice

function shiftedDiff(first, second) {
  // ...
  let count = 0;
  let copy = first.slice(0).split("");
  for (let i = 0; i < first.length; i++) {
    if (copy.join("") == second) {
      return count;
    }
    copy.unshift(copy.pop());
    count++;
  }
  return -1;
}
