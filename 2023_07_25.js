//https://www.codewars.com/kata/58a66c208b88b2de660000c3/train/javascript

function missingValues(a) {
  const x = a.find((v) => a.filter((w) => v === w).length === 1);
  const y = a.find((v) => a.filter((w) => v === w).length === 2);
  return x * x * y;
}
