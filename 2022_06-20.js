//https://www.codewars.com/kata/580a4001d6df740d61000301/solutions/javascript?filter=me&sort=best_practice

function completeSeries(arr) {
  // write your code here
  let a = [];
  if (arr.every((ele, i) => arr.lastIndexOf(ele) === i)) {
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr[arr.length - 1] + 1; i++) {
      a.push(i);
    }
    return a;
  }
  return [0];
}