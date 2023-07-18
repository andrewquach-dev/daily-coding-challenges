//https://www.codewars.com/kata/56b0f6243196b9d42d000034/train/javascript

function sumFactorial(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans += factorial(arr[i]);
  }
  return ans;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
