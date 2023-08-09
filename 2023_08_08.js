//https://projecteuler.net/problem=2

function sumEvenFibonacci(limit) {
  let sum = 0;
  let prev = 0;
  let current = 1;

  while (current <= limit) {
    if (current % 2 === 0) {
      sum += current;
    }

    const next = current + prev;
    prev = current;
    current = next;
  }

  return sum;
}
