//https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

function capitalize(s, arr) {
  let ans = s.split('');
  arr.forEach(e => ans[e] != undefined ? ans[e] = ans[e].toUpperCase() : null);
  return ans.join('');
};