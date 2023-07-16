//https://www.codewars.com/kata/54d4c8b08776e4ad92000835/javascript

function isPP(n) {
  for (var m = 2; m * m <= n; ++m)
    for (var k = 2; Math.pow(m, k) <= n; ++k)
      if (Math.pow(m, k) == n) return [m, k];
  return null;
}
