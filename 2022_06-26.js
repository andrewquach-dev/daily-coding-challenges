//https://www.codewars.com/kata/5434283682b0fdb0420000e6/solutions/javascript?filter=me&sort=best_practice

function caffeineBuzz(n) {
  let ans = "";
  if (n % 3 === 0 && n % 4 === 0) {
    ans = 'Coffee'
  } else if (n % 3 === 0) {
    ans = 'Java'
  } else {
    ans = 'mocha_missing!'
  }
  if ((n % 3 === 0 && n % 4 === 0 || n % 3 === 0) && n % 2 === 0) {
    ans += 'Script'
  }
  return ans;
}