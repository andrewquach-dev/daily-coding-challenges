//https://www.codewars.com/kata/544d114f84e41094a9000439/train/javascript

function powerOf4(n) {
  if (typeof n !== "number" || n == 0) return false;
  if (n == 4) return true;
  if (n % 4 == 0) return powerOf4(n / 4);
  return false;
}
