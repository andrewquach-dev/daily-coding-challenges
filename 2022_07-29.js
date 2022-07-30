//https://www.codewars.com/kata/55aea0a123c33fa3400000e7/train/javascript

const sortMe = (arr) =>
  arr
    .slice()
    .sort(
      (a, b) =>
        `${a}`.slice(-1).localeCompare(`${b}`.slice(-1)) ||
        arr.indexOf(a) - arr.indexOf(b)
    );
