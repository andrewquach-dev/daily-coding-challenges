//https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

function solve(arr) {
  var alphabeth = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(x => x.toLowerCase().split('').filter((y, i) => i == alphabeth.indexOf(y)).length);
};