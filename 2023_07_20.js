//https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript

function mean(lst) {
  var num = 0,
    str = "";
  lst.forEach(function (n) {
    if (!isNaN(n)) {
      num += +n;
    } else {
      str += n;
    }
  });
  return [num / 10, str];
}
