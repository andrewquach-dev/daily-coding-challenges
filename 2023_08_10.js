//https://projecteuler.net/problem=4

function largestPalindromeProduct(num) {
  let largest = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      const product = i * j;
      if (palindrome(product) && product > largest) {
        largest = product;
      }
    }
  }
  return largest;
}

function palindrome(num) {
  let s = String(num);
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
