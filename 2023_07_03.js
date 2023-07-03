//https://www.codewars.com/kata/529f2d1c403a58f660000656/train/javascript

var Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return b === 0 ? false : a / b;
  },
};
