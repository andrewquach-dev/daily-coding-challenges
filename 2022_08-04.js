//https://www.codewars.com/kata/59656c69253c365e58000046/solutions/javascript?filter=me&sort=best_practice

function maxPossibleScore(obj, arr) {
  let arr2 = arr.slice(0).map((e) => (isNaN(e) ? e : e.toString()));
  return arr2.length === 0
    ? 1
    : Object.entries(obj)
        .map((a) => (arr2.includes(a[0]) ? (a = a[1] * 2) : (a = a[1])))
        .reduce((a, e) => (a += e), 0);
}
