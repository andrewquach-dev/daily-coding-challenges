//https://projecteuler.net/problem=3

function getPrimeFactors(number) {
  let factors = [];
  let divisor = 2;

  while (number > 2) {
    if (number % divisor === 0) {
      factors.push(divisor);
      number = number / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

console.log(getPrimeFactors(13195));
console.log(getPrimeFactors(600851475143));
