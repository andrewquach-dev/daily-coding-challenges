//https://www.codewars.com/kata/52378b3ee72f21e1ea000045/train/javascript

function min(a, b) {
  return isNaN(a) || isNaN(b) ? NaN : a < b ? +a : +b;
}
