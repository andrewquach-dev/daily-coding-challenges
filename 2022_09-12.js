//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}
