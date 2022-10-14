//https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7/train/javascript

function sumSquares(array) {
  return array.reduce((a, e) => (a += e ** 2), 0);
}
