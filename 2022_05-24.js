//https://www.codewars.com/kata/59f7fc109f0e86d705000043/solutions/javascript/me/best_practice


function divisibleByThree(str) {
  return str.split('').map(c => Number(c)).reduce((a, n) => a + n) % 3 === 0;
}