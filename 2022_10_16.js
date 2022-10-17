//https://www.codewars.com/kata/56e6a330715e7221d9000a3b/train/javascript

Number.prototype.times = function (f) {
  let i = 0;
  while (i < this) {
    f(i);
    i++;
  }
};
