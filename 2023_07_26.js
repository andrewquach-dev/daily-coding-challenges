//https://www.codewars.com/kata/538948d4daea7dc4d200023f

function convertBits(a, b) {
  let x = a ^ b,
    count = 0;
  do {
    count += x & 1;
  } while ((x >>= 1));
  return count;
}
