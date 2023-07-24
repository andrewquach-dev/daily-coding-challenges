//https://www.codewars.com/kata/5dd259444228280032b1ed2a

function solve(x, y) {
  return x % y ? -1 : [y, x - y];
}
