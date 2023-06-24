//https://www.codewars.com/kata/589b1c15081bcbfe6700017a

function cost(mins) {
  let sum = 30;
  mins -= 60;
  while (mins > 5) {
    sum += 10;
    mins -= 30;
  }
  return sum;
}
