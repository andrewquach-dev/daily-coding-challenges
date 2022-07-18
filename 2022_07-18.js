//https://www.codewars.com/kata/58644e8ddf95f81a38001d8d/solutions/javascript?filter=all&sort=best_practice

function box(n) {
  const outB = "-".repeat(n);
  const inB = `-${" ".repeat(n - 2)}-`;

  return [outB, ...Array(n - 2).fill(inB), outB];
}
