//https://www.codewars.com/kata/583df40bf30065fa9900010c/solutions/javascript?filter=me&sort=best_practice

function getMean(arr, x, y) {
  if (x > arr.length || y > arr.length || x <= 1 || y <= 1) {
    return -1;
  } else {
    return (
      (arr.slice(0, x).reduce((a, e) => (a += e), 0) / x +
        arr.slice(arr.length - y, arr.length).reduce((a, e) => (a += e), 0) /
          y) /
      2
    );
  }
}
