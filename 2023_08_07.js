//https://projecteuler.net/problem=1

//number that we'd start at, int
//sum of numbers that are multiples of 3 or 5, int
// 10 => 23
// array variable stores all nums multiple of 3/5
// loop through param, start from param and decrement
// check to see if multiple of 3 or 5, if it is push to array
// return sum by using reduce array method

function multiplesOfThreeOrFive(n) {
  let arr = [];

  for (let i = n - 1; i > 0; i--) {
    if (i % 3 == 0 || i % 5 == 0) {
      arr.push(i);
    }
  }

  return arr.reduce((a, e) => (a += e), 0);
}

console.log(multiplesOfThreeOrFive(10));
console.log(multiplesOfThreeOrFive(100));
console.log(multiplesOfThreeOrFive(1000));
