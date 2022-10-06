//https://www.codewars.com/kata/5951d30ce99cf2467e000013/solutions/javascript

function isPythagoreanTriple(integers) {
  let temp = integers.sort((a, b) => a - b);
  return Math.pow(temp[0], 2) + Math.pow(temp[1], 2) == Math.pow(temp[2], 2);
}
