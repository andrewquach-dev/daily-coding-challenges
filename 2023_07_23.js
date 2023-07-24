//https://www.codewars.com/kata/56b1eb19247c01493a000065/train/javascript

function uniqueSum(lst) {
  return [...new Set(lst)].reduce((a, b) => a + b, null);
}
