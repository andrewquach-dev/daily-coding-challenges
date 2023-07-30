//https://www.codewars.com/kata/602db3215c22df000e8544f0/train/javascript

function twoArePositive(a, b, c) {
  return [...arguments].filter((i) => i > 0).length === 2;
}
