//https://www.codewars.com/kata/544d114f84e41094a9000439/train/javascript

function powerOf4(n) {
  let [b, index] = [0, 0];
  while (b <= n) {
    b = 4 ** index;
    if (b === n) {
      return true;
    }
    index++;
  }
  return false;
}
