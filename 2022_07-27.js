//https://www.codewars.com/kata/58308360aeb69a460b0002b2/solutions/javascript?filter=me&sort=best_practice

function unique(arr) {
  return arr.filter((e, i) => arr.indexOf(e) == i);
}
